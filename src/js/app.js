import Sound from './sound.js';
import Animations from './animations.js';

const sound = new Sound(decodeHandle);
const animations = new Animations();

const sec = 3000;
let timer = null;
const resetTimer = () => {
    if (timer)
        clearTimeout(timer);
    timer = setTimeout(() => toggleCover(true), sec);
};
const toggleCover = (state) => document.getElementById('cover').classList[state ? 'remove': 'add']('hidden');

window.addEventListener('keydown', function(e) {
    if (e.keyCode > 64 && e.keyCode < 91) {
        const key = e.key.toLowerCase();
        toggleCover(false);
        resetTimer();
        sound.play({key});
        animations.play({key});
    }
});

function decodeHandle(amount) {
    const total = 26;
    document.getElementById('progress').innerHTML = `${amount} / ${total}`;
    if (amount == total) {
        document.getElementById('loading').classList.add('hidden');
        toggleCover(true);
        resetTimer();
    }
}
