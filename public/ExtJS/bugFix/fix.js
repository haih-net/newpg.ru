// Фиксим баг с пропаданием скролла

(function() {
    if (!window.Ext || typeof Ext.Window !== 'function') return;
    Ext.Window.prototype.extjsMaximize = Ext.Window.prototype.maximize;
    Ext.Window.prototype.maximize = function() {
        var xwmct = this.container.hasClass('x-window-maximized-ct');
        this.extjsMaximize();
        if (!xwmct && this.container.hasClass('x-window-maximized-ct')) {
            this.xwmctFlag = true;
        }
    };
    Ext.Window.prototype.extjsRestore = Ext.Window.prototype.restore;
    Ext.Window.prototype.restore = function() {
        this.extjsRestore();
        delete this.xwmctFlag;
    };
    Ext.Window.prototype.extjsHide = Ext.Window.prototype.hide;
    Ext.Window.prototype.hide = function(animateTarget, cb, scope) {
        var hidden = this.hidden;
        this.extjsHide(animateTarget, cb, scope);
        if (!hidden && this.hidden && this.xwmctFlag) {
            this.container.removeClass('x-window-maximized-ct');
        }
    }
})();