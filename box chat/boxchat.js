const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<img src="./boxchat_images/icons/chatbox-icon.png" />',
    isNotClicked: '<img src="./boxchat_images/icons/chatbox-icon.png" />'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);