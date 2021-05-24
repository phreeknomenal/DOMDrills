document.addEventListener('DOMContentLoaded', function () {
    let myDiv = document.createElement('div');
    myDiv.className = 'header-container';

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode("This is an h1");
    h1.appendChild(h1Text);
    myDiv.appendChild(h1);

    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');
    h2.appendChild(h2Text);
    myDiv.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');
    h3.appendChild(h3Text);
    myDiv.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');
    h4.appendChild(h4Text);
    myDiv.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');
    h5.appendChild(h5Text);
    myDiv.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');
    h6.appendChild(h6Text);
    myDiv.appendChild(h6);

    h1.className = 'h1';
    h2.className = 'h2';
    h3.className = 'h3';
    h4.className = 'h4';
    h5.className = 'h5';
    h6.className = 'h6';

    document.body.appendChild(myDiv);

    let colors = ['#554', '#227', '#205', '#334', '#987', '#177', '#645', '#032'];

    // Function that gets random colors
    function getRandomColors() {
        // Search thru colors array for random color
        let myRandomColor = colors[Math.floor(Math.random() * colors.length)];
        // Returns #+value.
        return myRandomColor;
    };

    h1.addEventListener('click', event => {
        h1.style.color = getRandomColors();
    });

    h2.addEventListener('click', event => {
        h2.style.color = getRandomColors();
    });

    h3.addEventListener('click', event => {
        h3.style.color = getRandomColors();
    });

    h4.addEventListener('click', event => {
        h4.style.color = getRandomColors();
    });

    h5.addEventListener('click', event => {
        h5.style.color = getRandomColors();
    });

    h6.addEventListener('click', event => {
        h6.style.color = getRandomColors();
    });

    let button = document.createElement('button');
    let btnText = document.createTextNode('Click to add new list item');
    button.appendChild(btnText);
    document.body.appendChild(button);
    button.className = 'button';

    let ul = document.createElement('ul');
    myDiv.appendChild(ul);

    let li = document.createElement('li');
    let liCount = 0;

    function addToList () {
        liCount++;
        let liText = document.createTextNode('This is list item ' + liCount);
        li.appendChild(liText);
        ul.appendChild(li);

        li.addEventListener("click", function() {
            li.style.color = getRandomColors();
        });

        li.addEventListener("dblclick", function() {
            li.remove();
        });
    }

    button.addEventListener('click', addToList);

});
