'use strict';
'require uci';
'require view';
'require form';

return view.extend({
    render: function() {
        var m, s, o;
        m = new form.Map('bsskick', _('Wireless Kick'),
            _('This is a service for checking wireless clients that send message "bss_termination_delay" and reject change wireless AP.<p>Process bsskick force disconnect Wireless hosts from old Wireless AP.'));
        s = m.section(form.TypedSection, 'bsskick', _('Settings'));
        s.anonymous = true;
        o = s.option(form.DynamicList, 'mac', _('List for ignore'), _('MAC address'));
        return m.render();
    },
});
