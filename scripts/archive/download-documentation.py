"""Загрузка авторских страниц; при сетевом отказе очередь прекращается."""
import json
import sys
import pathlib
import time
import urllib.request

root = pathlib.Path(__file__).resolve().parents[2]
folder = root / 'app/Custom/Archive/source/documentation'
manifest = folder / 'requests.json'
records = json.loads(manifest.read_text()) if manifest.exists() else []
paths = ['extjs/extjs_lessons.html'] + ['extjs/extjs_lessons/lesson%d.html' % n for n in range(3, 7)] + ['extjs/extjs_lessons/106.html', 'extjs/extjs_lessons/examples.html', 'modx/modx-revolution.html', 'modx/modx-revolution/modx-revolution-optimizatsiya-kesh.html']
if '--pending' in sys.argv:
    saved = {record['path'] for record in records if record.get('status') == 200}
    paths = [row['path'].removeprefix('/documentation/')
             for row in json.loads((folder / 'discovered.json').read_text())
             if row['path'].startswith('/documentation/modx') and row['path'] not in saved]
for path in paths:
    target = folder / path.replace('/', '__')
    if target.exists():
        continue
    timestamp = '20130101000000' if path.startswith('modx') else '20101027085749'
    url = f'https://web.archive.org/web/{timestamp}id_/http://newpg.ru/documentation/{path}'
    try:
        with urllib.request.urlopen(url, timeout=40) as response:
            body = response.read()
            entry = {'path': '/documentation/' + path, 'requestedUrl': url, 'url': response.url, 'status': response.status, 'bytes': len(body), 'file': target.name}
        target.write_bytes(body)
    except Exception as error:
        entry = {'path': '/documentation/' + path, 'requestedUrl': url, 'error': str(error)}
    records.append(entry)
    manifest.write_text(json.dumps(records, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps(entry, ensure_ascii=False), flush=True)
    if 'error' in entry and 'HTTP Error 404:' not in entry['error']:
        raise SystemExit(1)
    time.sleep(3)
