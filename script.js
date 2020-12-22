let foodArray = ["chicken", 'apples', 'bananas', 'lemons', 'spinach']

$('#click-here').on('click', function (){
    for (let i = 0; i < foodArray.length; i++){
        let pContainer = $("<p class=label>");
        let labelContainer = $("<label class=option>");
        let inputContainer = $("<input type=checkbox >");
        let spanContainer = $('<span>');
        
        inputContainer.addClass('filled-in');
        spanContainer.text(foodArray[i]);
        inputContainer.attr('value', foodArray[i]);

        $('#checkbox').append(pContainer);
        pContainer.append(labelContainer);
        labelContainer.append(inputContainer);
        labelContainer.append(spanContainer);
    
    }
})