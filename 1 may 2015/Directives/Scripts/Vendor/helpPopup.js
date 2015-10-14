// jQuery Help popup Dialogs Plugin
//
// Version 1.1
//
// Ritesh Srivastava
// A Beautiful Site (http://abeautifulsite.net/)
// 07 March 2014
//
// Website: http://abeautifulsite.net/blog/2008/12/jquery-alert-dialogs/
//
// Usage:
//		jAlert( message, [title, callback] )
//		jConfirm( message, [title, callback] )
//		jPrompt( message, [value, title, callback] )
// 
// History:
//
//		1.00 - Released (29 December 2008)
//
//		1.01 - Fixed bug where unbinding would destroy all resize events
//
// License:
// 
// This plugin is dual-licensed under the GNU General Public License and the MIT License and
// is copyright 2008 A Beautiful Site, LLC. 
//
(function ($) {

    $.poups = {

        // These properties can be read/written by accessing $.poups.propertyName from your scripts at any time

        verticalOffset: -75,                // vertical offset of the dialog from center screen, in pixels
        horizontalOffset: 0,                // horizontal offset of the dialog from center screen, in pixels/
        repositionOnResize: true,           // re-centers the dialog on window resize
        overlayOpacity: .61,                // transparency level of overlay
        overlayColor: '#666666',               // base color of overlay
        draggable: false,                    // make the dialogs draggable (requires UI Draggables plugin)
        okButton: '&nbsp;OK&nbsp;',         // text for the OK button
        cancelButton: '&nbsp;Cancel&nbsp;', // text for the Cancel button
        dialogClass: null,                  // if specified, this class will be applied to all dialogs

        // Public methods

        helpPopup: function (message,popupHeader,popupWidth,popupHeight,isCloseRequired) {
        	
            $.poups._show(message,popupHeader,'helpPopup',popupWidth,popupHeight,isCloseRequired)
        },

        // Private methods

        _show: function (msg,popupHeader,type,popupWidth,popupHeight,isCloseRequired) {
        	
            $.poups._hide();
            $.poups._overlay('show');

            $("BODY").append(
			  '<div id="popup_container" style="min-width: 500px; max-width: 500px;">' +
			    '<div id="popupTitle"></div>' +
			    '<div id="popup_content">' +
			      '<div id="popup_message"></div>' +
				'</div>' +
			  '</div>');

            if ($.poups.dialogClass) $("#popup_container").addClass($.poups.dialogClass);

            // IE6 Fix
          
            var pos = ($.browser.msie && parseInt($.browser.version) <= 6) ? 'absolute' : 'fixed';
            var pos ='fixed';
            $("#popup_container").css({
                position: pos,
                zIndex: 99999,
                padding: 0,
                margin: 0
            });
           
           if(isCloseRequired)
           {
           //	debugger;
           	
           	var strPopUpHeader=COMMON.UTIL.getPopupHeader(popupHeader,'$.poups._hide()');
           	strPopUpHeader=strPopUpHeader.replace('divImgClose','divImgClose'+'_HelpPopup')
            $("#popupTitle").html(strPopUpHeader);
           
           
           }
            else
             $("#popupTitle").html(COMMON.UTIL.getPopupHeader(popupHeader));
            $("#popup_content").addClass(type);
            $("#popup_message").html(msg);
            $("#popup_message").append('<div style="height:20px"/>');
             
           

            $("#popup_container").css({
                minWidth: popupWidth,
                maxWidth: popupWidth
            });

			$("#popup_content").css({
		        maxHeight: popupHeight - 80,
                overflow: 'auto',
		     });
		     
		   //  $("#popup_content").css('padding-bottom', '10px');
			
             
            $.poups._reposition();
            $.poups._maintainPosition(true);

            switch (type) {
                case 'helpPopup':
                    //$("#popup_message").after('<div id="popup_panel" style="text-align: right;"><input class="button" type="button" style="width:40px" value="' + $.poups.okButton + '" id="popup_ok" /></div>');
                    //$("#popup_ok").click(function () {
                     //   $.poups._hide();
                      //  callback(true);
                    //});
                    $("#popup_ok").focus().keypress(function (e) {
                        if (e.keyCode == 13 || e.keyCode == 27) $("#popup_ok").trigger('click');
                    });
                    break;
                    $("#popup_cancel").click(function () {
                        $.poups._hide();
                        if (callback) callback(null);
                    });
                    $("#popup_prompt, #popup_ok, #popup_cancel").keypress(function (e) {
                        if (e.keyCode == 13) $("#popup_ok").trigger('click');
                        if (e.keyCode == 27) $("#popup_cancel").trigger('click');
                    });
                    if (value) $("#popup_prompt").val(value);
                    $("#popup_prompt").focus().select();
                    break;
            }
		
            // Make draggable
            if ($.poups.draggable) {
                try {
                    $("#popup_container").draggable({ handle: $("#popupTitle") });
                    $("#popupTitle").css({ cursor: 'move'});
                } catch (e) { /* requires jQuery UI draggables */ }
            }
        },

        _hide: function () {
            $("#popup_container").remove();
            $.poups._overlay('hide');
            $.poups._maintainPosition(false);
        },

        _overlay: function (status) {
            switch (status) {
                case 'show':
                    $.poups._overlay('hide');
                    $("BODY").append('<div id="popup_overlay"></div>');
                   
                    $("#popup_overlay").css({
                        position: 'absolute',
                        zIndex: 99998,
                        top: '0px',
                        left: '0px',
                        width: '100%',
                        height: $(document).height(),
                        background: $.poups.overlayColor,
                        opacity: $.poups.overlayOpacity
                    });
                    break;
                case 'hide':
                    $("#popup_overlay").remove();
                    break;
            }
        },

        _reposition: function () {
        	 //var top = (($(window).height() / 2) - Number(popupHeight)/2);
            var top = (($(window).height() / 2) + 40 - ($("#popup_container").outerHeight() / 2)) + $.poups.verticalOffset;
            var left = (($(window).width() / 2) - ($("#popup_container").outerWidth() / 2)) + $.poups.horizontalOffset;
            if (top < 0) top = 0;
            if (left < 0) left = 0;
		
		//top=top+50;
            // IE6 fix
            //if ($.browser.msie && parseInt($.browser.version) <= 6) top = top + $(window).scrollTop();

            $("#popup_container").css({
                top: (top) + 'px',
                left: left + 'px'
            });
            $("#popup_overlay").height($(document).height());
        },

        _maintainPosition: function (status) {
            if ($.poups.repositionOnResize) {
                switch (status) {
                    case true:
                        $(window).bind('resize', $.poups._reposition);
                        break;
                    case false:
                        $(window).unbind('resize', $.poups._reposition);
                        break;
                }
            }
        }

    }

    // Shortuct functions
    jHelpPopup = function (message,popupHeader,popupWidth,popupHeight,isCloseRequired) {

     
        $.poups.helpPopup(message,popupHeader,popupWidth,popupHeight,isCloseRequired);
    }

    

})(jQuery);