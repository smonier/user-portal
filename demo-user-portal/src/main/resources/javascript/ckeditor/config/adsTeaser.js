const serverContext = (typeof contextJsParameters != 'undefined') ? contextJsParameters.contextPath : '';
const moduleName = "demo-user-portal";
const moduleContext = `${serverContext}/modules/${moduleName}`;
const ckeditorContext = `${moduleContext}/javascript/ckeditor`;

CKEDITOR.plugins.addExternal('wordcount', `${ckeditorContext}/plugins/wordcount/plugin.js`);
CKEDITOR.plugins.addExternal('notification', `${ckeditorContext}/plugins/notification/plugin.js`);

CKEDITOR.editorConfig = function (config) {
    config.allowedContent = true;

    config.contextPath = serverContext;
    config.language = (typeof contextJsParameters != 'undefined') ? contextJsParameters.uilang : 'en';
    config.contentlanguage = (typeof contextJsParameters != 'undefined') ? contextJsParameters.lang : 'en';
    config.siteUuid = (typeof contextJsParameters != 'undefined') ? contextJsParameters.siteUuid : '';

    // config.filebrowserWindowFeatures = 'location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes';
    // config.filebrowserWindowName = 'JahiaFileBrowser';
    // config.filebrowserBrowseUrl = config.contextPath + '/engines/contentpicker.jsp?site=' + config.siteUuid + '&lang=' + config.contentlanguage + '&uilang=' + config.language;
    // config.filebrowserImageBrowseUrl = config.contextPath + '/engines/contentpicker.jsp?type=imagepicker&site=' + config.siteUuid + '&lang=' + config.contentlanguage + '&uilang=' + config.language;
    // config.filebrowserFlashBrowseUrl = config.contextPath + '/engines/contentpicker.jsp?mime=application%2Fx-shockwave-flash%2Cvideo%2Fx-flv&site=' + config.siteUuid + '&lang=' + config.contentlanguage + '&uilang=' + config.language;
    config.filebrowserLinkBrowseUrl = config.contextPath + '/engines/contentpicker.jsp?type=editoriallinkpicker&site=' + config.siteUuid + '&lang=' + config.contentlanguage + '&uilang=' + config.language;
    // config.image_previewText = '';

    config.wordcount = {
        // showRemaining: false,
        // showParagraphs: true,
        // showWordCount: true,
        // showCharCount: false,
        // countBytesAsChars: false,
        // countSpacesAsChars: false,
        // countHTML: false,
        // countLineBreaks: false,
        // hardLimit: true,
        // warnOnLimitOnly: false,
        maxWordCount: 30,
        // maxCharCount: -1,
        // maxParagraphs: -1,
        // filter: new CKEDITOR.htmlParser.filter({
        //     elements: {
        //         div: function( element ) {
        //             if(element.attributes.class == 'mediaembed') {
        //                 return false;
        //             }
        //         }
        //     }
        // })
    }
    // config.toolbar = 'Tinny'; //moved to ckeditor config in cnd
    // config.templates = 'industrial,default';
    config.templates = moduleName;
    // config.stylesSet = `B4:${ckeditorContext}/stylesSet.js`;
    // config.contentsCss = [
    //     `${serverContext}/modules/bootstrap4-core/css/bootstrap.min.css`,
    //     `${moduleContext}/css/style.css`
    //     // `${moduleContext}/css/editor.css`
    // ];
    config.templates_files = [
        // `${serverContext}/modules/bootstrap4-components/javascript/cktemplates.js`,
        `${ckeditorContext}/templates.js`
    ];


    config.toolbar_Tinny = [
        ['Source', '-', 'Templates','Bold','Italic','ShowBlocks']
    ];

    // config.extraPlugins = 'acheck,wsc,scayt,macrosdropdown';
    config.extraPlugins = 'wordcount,notification,macrosdropdown';
    config.templates_replaceContent = false;

    // [ Left, Center, Right, Justified ]
    // config.justifyClasses = [ 'text-left', 'text-center', 'text-right', 'text-justify' ];
};

CKEDITOR.addCss(
    '.cke_combopanel { width:300px !important;}'
)
CKEDITOR.dtd.$removeEmpty['i'] = 0;
CKEDITOR.dtd.$removeEmpty['span'] = 0;
CKEDITOR.dtd.$removeEmpty['div'] = 0;
CKEDITOR.dtd.$removeEmpty['em'] = 0;

CKEDITOR.on('instanceReady', function() {
    $(".cke_combo_inlinelabel").text("Inline styles");
});