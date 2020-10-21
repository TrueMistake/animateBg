const app = document.getElementById('app');
const BLOCK_COUNT = 10;
const blocks = [];
const b_width = Math.ceil(window.innerWidth / BLOCK_COUNT);
const b_height = Math.ceil(window.innerHeight / BLOCK_COUNT);

createBlock();

function createBlock() {
    for (let i = 0; i < BLOCK_COUNT; i++) {
        const row = [];
        for (let j = 0; j < BLOCK_COUNT; j++) {
            const block = document.createElement('div');
            block.classList.add('block');
            block.style.width = b_width + 'px';
            block.style.height = b_height + 'px';

            block.style.top = '100vh';
            block.style.left = '100vw';

            block.style.backgroundPosition = `${-b_width * j}px ${-b_height * i}px`;
            row.push(block);
            app.appendChild(block);
        }
        blocks.push(row);
    }

    setTimeout(() => { animateBlocks() }, 1000);
}

function animateBlocks() {
    blocks.forEach((row, i) => {
        row.forEach((block, j) => {
            block.style.top = (b_height * i) + 'px';
            block.style.left = (b_width * j) + 'px';

            block.style.transitionDelay = (i * BLOCK_COUNT + j * BLOCK_COUNT ) + 'ms';

        })
    })
}







