function checkboxes() {
    const triggerBottom = window.innerheight / 5*4;
    boxes.forEach( (box, idx) => {
        const boxtop =box.getboundingclientrect().top;

        if(boxtop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}