let i = 0;

function changeColors(){
    let colors = ['red','green','blue','black','orange','yellow']

    document.getElementsByTagName('body')[0].
    style.background = colors[i++];

    if(i > colors.length - 1){
        i = 0;
    }
}