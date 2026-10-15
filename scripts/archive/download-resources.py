"""Последовательное получение ресурсов урока с остановкой при первом отказе."""
import json
import pathlib
import sys
import time
import urllib.request

root = pathlib.Path(__file__).resolve().parents[2]
manifest = root / 'app/Custom/pages/ExtJsLesson1Page/source/resources.json'
records = json.loads(manifest.read_text())
for path in sys.argv[1:]:
    target = root / 'public' / path
    if target.exists():
        continue
    url = 'https://web.archive.org/web/20101027085749id_/http://newpg.ru/' + path
    try:
        with urllib.request.urlopen(url, timeout=40) as response:
            body = response.read()
            entry = {'path': path, 'url': response.url, 'status': response.status, 'bytes': len(body)}
            if b'<html' in body[:500].lower():
                raise ValueError('Вместо ресурса получен HTML')
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(body)
    except Exception as error:
        entry = {'path': path, 'error': str(error)}
    records.append(entry)
    manifest.write_text(json.dumps(records, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps(entry, ensure_ascii=False), flush=True)
    if 'error' in entry and 'HTTP Error 404:' not in entry['error']:
        sys.exit(1)
    time.sleep(2)
