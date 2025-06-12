$(document).ready(function() {
    $('.menu-toggle').on('click',function() {
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });

    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
	  $('.reply-btn').on('click', function () {
        $(this).closest('.forum-thread').find('.reply-form').slideToggle();
    });

    $('.submit-reply').on('click', function () {
        const replyText = $(this).siblings('textarea').val().trim();
        if (replyText !== "") {
            const replyHtml = `<div class="reply"><strong>You</strong>: ${replyText}</div>`;
            $(this).closest('.forum-thread').find('.forum-replies').append(replyHtml);
            $(this).siblings('textarea').val('');
            $(this).parent('.reply-form').slideUp();
        }
    });

    $('.vote-btn').on('click', function () {
        const isUpvote = $(this).hasClass('upvote');
        const countSpan = $(this).siblings('.vote-count');
        let currentCount = parseInt(countSpan.text());
        currentCount += isUpvote ? 1 : -1;
        countSpan.text(currentCount);
    });
});



const {
	ClassicEditor,
	AutoLink,
	Autosave,
	Bold,
	Essentials,
	Italic,
	Link,
	Paragraph,
	PlainTableOutput,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableLayout,
	TableProperties,
	TableToolbar
} = window.CKEDITOR;

const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDgxMzExOTksImp0aSI6ImY2ODUxZGFjLTVmYTUtNDkyYS04MTU1LTgzMThiY2U4MGUxMyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjJkM2UxZTQ2In0.zK7GYeYktMC9KgAOBx_ynFIkzI8mnLijiQ1luMwCQwvriQwb9vRaCQJX4dv5yfXKMjH8M2u2k-ySZs2gpd7POA';

const editorConfig = {
	toolbar: {
		items: ['bold', 'italic', '|', 'link', 'insertTable', 'insertTableLayout'],
		shouldNotGroupWhenFull: false
	},
	plugins: [
		AutoLink,
		Autosave,
		Bold,
		Essentials,
		Italic,
		Link,
		Paragraph,
		PlainTableOutput,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableLayout,
		TableProperties,
		TableToolbar
	],
	licenseKey: LICENSE_KEY,
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	placeholder: 'Type or paste your content here!',
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	}
};

ClassicEditor.create(document.querySelector('#body'), editorConfig);