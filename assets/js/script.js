// -----------------------------jai na age theke cila ata ata dora jabe nai
        $(function () {
            var selectedClass = "";
            $("p").click(function () {
                selectedClass = $(this).attr("data-rel");
                $("#portfolio").fadeTo(50, 0.1);
                $("#portfolio div").not("." + selectedClass).fadeOut();
                setTimeout(function () {
                    $("." + selectedClass).fadeIn();
                    $("#portfolio").fadeTo(50, 1);
                }, 500);

            });
        });













// ----------------------------------t-shirt -dital button---------------------------------------




const handelDitalButton=()=>{
    console.log('hi')
}