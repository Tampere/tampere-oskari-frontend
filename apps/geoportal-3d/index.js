import { addAccessLogNotice } from '../../bundles/accesslog/hook.js';

jQuery(document).ready(function () {
    function onSuccess () {
        addAccessLogNotice();
    }
    function onError () {
        jQuery('#mapdiv').append('Unable to start');
    }
    Oskari.app.loadAppSetup(window.location.pathname + 'action?action_route=GetAppSetup', window.controlParams, onError, onSuccess);
});
