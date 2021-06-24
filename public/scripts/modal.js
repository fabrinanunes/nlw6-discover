export default function Modal(){

    const cancelButton = document.querySelector('.button.cancel')
    const modalWrapper = document.querySelector('.modal-wrapper')
    
    cancelButton.addEventListener('click', close)


    function open(){
        //class active: on
        modalWrapper.classList.add('active')
    }
    function close(){
        //class active: off
        modalWrapper.classList.remove('active')
    }

    return{
        open,
        close
    }
}