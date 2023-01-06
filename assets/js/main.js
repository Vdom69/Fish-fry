
$(document).ready(function() {
    const FORM_MODE = 'prod'
    const FORM_KEY = 'WjC6ahhJ'
    const FORM_URL = (FORM_MODE == 'dev') ? 'echo' : FORM_KEY

    $('.nav-menu-toggle').click(function() {
        toggleMenu()
    })

    $('#navMenuModal').find('li').click(function() {
        $('#navMenuModal').hide()
    })

    $('form').each((i, form) => {

        $(form).submit(e => {
            e.preventDefault();

            const data = $(form).serialize()

            $.ajax({
                url: "https://submit-form.com/" + FORM_URL,
                type: "POST",
                data,
                dataType: 'JSON',
                success: (res) => {

                    $(form).hide()
                    $(form).next().show().delay(3000).slideUp('slow')
                }
            });

        })

    })
})

const toggleMenu = () => {
    $('#navMenuModal').toggle()

    const menuList = $('#navMenuModal').find('li')


    if($('#navMenuModal').is(':hidden')) {
        menuList.each((i, el) => {
            $(el).css({marginLeft: 0})
        })
    } else {
        menuList.each((i, el) => {
            $(el).delay(i * 200).animate({marginLeft: '2rem'}, 750)
        })
    }

}



$('.slider').slick({
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
  },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
