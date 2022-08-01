// Menu
const btnMenu = document.querySelector('#btn');
const sidebar = document.querySelector('.sidebar');
const btnLogout = document.getElementById('log-out');
const btnAll = document.getElementById('btnAll');
const btnManhwa = document.getElementById('btnManhwa');
const btnManhua = document.getElementById('btnManhua');
const btnManga = document.getElementById('btnManga');
const btnOthers = document.getElementById('btnOthers');
const btnHot = document.getElementById('btnHot');
const btnEnd = document.getElementById('btnEnd');
const btnBlacklist = document.getElementById('btnBlacklist');
const btnDrop = document.getElementById('btnDrop');

// Modal add
const btnAdd = document.getElementById('btnAdd');
const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');
const txtImg = document.getElementById('linkImgAddModal');
const img = document.getElementById('imgAddModal');

// Modal edit
const editModal = document.querySelector('.edit-modal');

// Modal delete
const deleteModal = document.querySelector('.delete-modal');
const btnCloseDeleteModal = document.getElementById('btnCloseDeleteModal');

// Content
const cardContainer = document.querySelector('.card-container');
const cardChilren = cardContainer.children;
const arrCard = [...cardChilren];

btnMenu.onclick = function () {
    sidebar.classList.toggle('active');
};

btnLogout.onclick = function () {
    window.location = '/';
};

// button close in delete modal on click
btnCloseDeleteModal.onclick = () => {
    history.back();
};

// Click add comic button
btnAdd.onclick = function () {
    addModal.classList.toggle('modal-show');

    addModalForm.name.value = '';
    addModalForm.chap.value = '';
    addModalForm.image.value = '';
    addModalForm.imgAddModal.src = '';
    if (img.getAttribute('src') == '') img.style.visibility = 'hidden';
};

// User click anywhere outside the modal
window.addEventListener('click', (e) => {
    if (e.target === addModal) {
        addModal.classList.remove('modal-show');
    }
    if (e.target == editModal) {
        history.back();
    }
    if (e.target == deleteModal) {
        history.back();
    }
});

// Change text link img in add modal
txtImg.addEventListener('change', () => {
    if (txtImg.value != '') {
        img.style.visibility = 'visible';
        addModalForm.imgAddModal.src = txtImg.value;
    } else {
        img.style.visibility = 'hidden';
    }
});

// clear all card in content
function clearCardInContent() {
    while (cardContainer.firstChild) 
        cardContainer.firstChild.remove();
}

function clickTypeComicMenu(button) {
    clearCardInContent();
    renderComics(arrCard, button.children[1].innerHTML);

    // switch (button.children[1].innerHTML) {
    //     case 'Manhwa':
    //     case 'Manhua':
    //     case 'Manga':
    //     case 'Others':
            
    //         break;

    //     default:
    //         break;
    // }
}

// render comics to content
function renderComics(arrCard, typeStr) {
    const arrComics = arrCard.filter((card) => {
        return card.getAttribute('data-type') === typeStr;
    });

    console.log(arrCard)

    arrComics.forEach((card) => {
        cardContainer.appendChild(card);
    });
}

// click button type of comics in menu
btnManhwa.addEventListener('click', () => {
    clickTypeComicMenu(btnManhwa)
});
btnManhua.addEventListener('click', () => {
    clickTypeComicMenu(btnManhua)
});
btnManga.addEventListener('click', () => {
    clickTypeComicMenu(btnManga)
});
btnOthers.addEventListener('click', () => {
    clickTypeComicMenu(btnOthers)
});