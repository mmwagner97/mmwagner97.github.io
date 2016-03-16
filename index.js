

function my_face_click_handler() {
    alert("ouch");
}

function on_page_ready(){
    $(".myface").click(my_face_click_handler)
}

$(document).ready(on_page_ready)