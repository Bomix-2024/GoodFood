var config = document.querySelector('script[data-config-wp]').getAttribute('data-config-wp')
config = JSON.parse(config)

$("#example").czmChatSupport({
    button: {
        position: "right",
        style: 1,
        src: '<img src="/plugins/whatsapp-bubble/assets/img/whatsapp-icon.png">',
        backgroundColor: "#10c379",
        effect: 1,
        notificationNumber: "1",
        speechBubble: 'Olá, vamos conversar?',
        pulseEffect: false,
        text: {
            title: "Olá, vamos conversar?",
            description: "Customer Support",
            online: "Online agora",
            offline: "Eu voltarei em breve"
        }
    },
    popup: {
        outsideClickClosePopup: !0,
        effect: 1,
        header: {
            backgroundColor: "#10c379",
            title: "Precisa de ajuda? Converse conosco",
            description: "Clique em um de nossos representantes abaixo"
        },
        persons: config.whatsapp_chat.agents.map(agent => {
            return {
                avatar: {
                    src: `<img src="${agent.image}" alt="${agent.name}">`,
                    backgroundColor: "#ffffff",
                    onlineCircle: !0
                },
                text: {
                    title: agent.name,
                    description: agent.role,
                    online: "Estou online",
                    offline: "Volto em breve"
                },
                link: {
                    desktop: `https://api.whatsapp.com/send?phone=${agent.number}&text=${agent.default_msg}`,
                    mobile: `https://wa.me/${agent.number}/?text=${agent.default_msg}`
                },
                onlineDay: {
                    sunday: "00:00-23:59",
                    monday: "00:00-23:59",
                    tuesday: "00:00-23:59",
                    wednesday: "00:00-23:59",
                    thursday: "00:00-23:59",
                    friday: "00:00-23:59",
                    saturday: "00:00-23:59"
                }
            }
        })
    },
    sound: !0,
    changeBrowserTitle: "Nova mensagem",
    cookie: true
})