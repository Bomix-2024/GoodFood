/*

This page has been encrypted for security purposes. It will look normal when you buy it.

*/

!function (e) {
    "use strict";
    e("#example").czmChatSupport({
        button: {
            position: "right",
            style: 1,
            src: '<i class="fab fa-whatsapp"></i>',
            backgroundColor: "#10c379",
            effect: 1,
            notificationNumber: "1",
            speechBubble: "How can we help you?",
            pulseEffect: !0,
            text: {
                title: "Need help? Chat with us",
                description: "Customer Support",
                online: "Now Online",
                offline: "I will be back soon"
            }
        },
        popup: {
            automaticOpen: !1,
            outsideClickClosePopup: !0,
            effect: 1,
            header: {
                backgroundColor: "#10c379",
                title: "Need help? Chat with us",
                description: "Click one of our representatives below"
            },
            persons: [{
                avatar: {
                    src: '<img src="assets/img/person/1.jpg" alt="">',
                    backgroundColor: "#ffffff",
                    onlineCircle: !0
                },
                text: {
                    title: "Lorna Hensley",
                    description: "Sales Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            }, {
                avatar: {
                    src: '<img src="assets/img/person/2.jpg" alt="">',
                    backgroundColor: "#ffffff",
                    onlineCircle: !0
                },
                text: {
                    title: "Mattie Simmonds",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            }, {
                avatar: {
                    src: '<img src="assets/img/person/3.jpg" alt="">',
                    backgroundColor: "#ffffff",
                    onlineCircle: !0
                },
                text: {
                    title: "Kole Cleg",
                    description: "Techincal Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
                },
                onlineDay: {
                    sunday: !1,
                    monday: !1,
                    tuesday: !1,
                    wednesday: !1,
                    thursday: !1,
                    friday: !1,
                    saturday: !1
                }
            }]
        },
        sound: !0,
        changeBrowserTitle: "New Message!",
        cookie: !1
    }),
        e(".run-example").on("click", function () {
            e("#example").remove(),
                e("body").append('<div id="example"></div>');
            var t = e(this).attr("data-example")
                , o = e(this).attr("data-name");
            "whatsapp" == t && ("multiple-accounts-1" == o && e("#example").czmChatSupport({
                button: {
                    position: "right",
                    style: 1,
                    src: '<i class="fab fa-whatsapp"></i>',
                    backgroundColor: "#10c379",
                    effect: 1,
                    notificationNumber: "1",
                    speechBubble: "How can we help you?",
                    pulseEffect: !0,
                    text: {
                        title: "Need help? Chat with us",
                        description: "Customer Support",
                        online: "I'm Online",
                        offline: "I will be back soon"
                    }
                },
                popup: {
                    automaticOpen: !0,
                    outsideClickClosePopup: !0,
                    effect: 1,
                    header: {
                        backgroundColor: "#10c379",
                        title: "Need help? Chat with us",
                        description: "Click one of our representatives below"
                    },
                    persons: [{
                        avatar: {
                            src: '<img src="assets/img/person/1.jpg" alt="">',
                            backgroundColor: "#ffffff",
                            onlineCircle: !0
                        },
                        text: {
                            title: "Lorna Hensley",
                            description: "Sales Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        },
                        link: {
                            desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                            mobile: "https://wa.me/905377323226/?text=Hi"
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
                    }, {
                        avatar: {
                            src: '<img src="assets/img/person/2.jpg" alt="">',
                            backgroundColor: "#ffffff",
                            onlineCircle: !0
                        },
                        text: {
                            title: "Mattie Simmonds",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        },
                        link: {
                            desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                            mobile: "https://wa.me/905377323226/?text=Hi"
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
                    }, {
                        avatar: {
                            src: '<img src="assets/img/person/3.jpg" alt="">',
                            backgroundColor: "#ffffff",
                            onlineCircle: !0
                        },
                        text: {
                            title: "Kole Cleg",
                            description: "Techincal Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        },
                        link: {
                            desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                            mobile: "https://wa.me/905377323226/?text=Hi"
                        },
                        onlineDay: {
                            sunday: !1,
                            monday: !1,
                            tuesday: !1,
                            wednesday: !1,
                            thursday: !1,
                            friday: !1,
                            saturday: !1
                        }
                    }]
                },
                sound: !0,
                changeBrowserTitle: "New Message!",
                cookie: !1
            }),
                "multiple-accounts-2" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 1,
                        src: '<i class="fab fa-whatsapp"></i>',
                        backgroundColor: "#10c379",
                        effect: 1,
                        notificationNumber: "1",
                        speechBubble: "How can we help you?",
                        pulseEffect: !0,
                        text: {
                            title: "Need help? Chat with us",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        }
                    },
                    popup: {
                        automaticOpen: !0,
                        outsideClickClosePopup: !0,
                        effect: 1,
                        header: {
                            backgroundColor: "#10c379",
                            title: "Need help? Chat with us",
                            description: "Click one of our representatives below"
                        },
                        persons: [{
                            avatar: {
                                src: '<img src="assets/img/person/1.svg" alt="">',
                                backgroundColor: "#d6dde1",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Lorna Hensley",
                                description: "Sales Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
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
                        }, {
                            avatar: {
                                src: '<img src="assets/img/person/2.svg" alt="">',
                                backgroundColor: "#d6dde1",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Mattie Simmonds",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
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
                        }, {
                            avatar: {
                                src: '<img src="assets/img/person/3.svg" alt="">',
                                backgroundColor: "#d6dde1",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Kole Cleg",
                                description: "Techincal Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
                            },
                            onlineDay: {
                                sunday: !1,
                                monday: !1,
                                tuesday: !1,
                                wednesday: !1,
                                thursday: !1,
                                friday: !1,
                                saturday: !1
                            }
                        }]
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "multiple-accounts-3" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 3,
                        src: '<i class="fab fa-whatsapp"></i>',
                        backgroundColor: "#10c379",
                        effect: 4,
                        notificationNumber: "2",
                        speechBubble: "Can we help you?",
                        pulseEffect: !1,
                        text: {
                            title: "Whatsapp Support",
                            description: "Mon-Sat: 10:00/22:00",
                            online: "Now Online",
                            offline: "I will be back soon"
                        }
                    },
                    popup: {
                        automaticOpen: !0,
                        outsideClickClosePopup: !0,
                        effect: 1,
                        header: {
                            backgroundColor: "#10c379",
                            title: "Need help? Chat with us",
                            description: "Click one of our representatives below"
                        },
                        persons: [{
                            avatar: {
                                src: '<i class="fab fa-whatsapp"></i>',
                                backgroundColor: "#10c379",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Lorna Hensley",
                                description: "Sales Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
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
                        }, {
                            avatar: {
                                src: '<i class="fab fa-whatsapp"></i>',
                                backgroundColor: "#10c379",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Mattie Simmonds",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
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
                        }, {
                            avatar: {
                                src: '<i class="fab fa-whatsapp"></i>',
                                backgroundColor: "#10c379",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Kole Cleg",
                                description: "Techincal Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
                            },
                            onlineDay: {
                                sunday: !1,
                                monday: !1,
                                tuesday: !1,
                                wednesday: !1,
                                thursday: !1,
                                friday: !1,
                                saturday: !1
                            }
                        }]
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "multiple-accounts-4" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 5,
                        src: '<i class="fab fa-whatsapp"></i>',
                        backgroundColor: "#10c379",
                        effect: 7,
                        notificationNumber: "5",
                        speechBubble: "Custom Text",
                        pulseEffect: !1,
                        text: {
                            title: "Custom Text Custom",
                            description: "Custom Text",
                            online: "Custom Text",
                            offline: "Custom Text"
                        }
                    },
                    popup: {
                        automaticOpen: !0,
                        outsideClickClosePopup: !0,
                        effect: 14,
                        header: {
                            backgroundColor: "#10c379",
                            title: "Custom Text",
                            description: "Custom Text"
                        },
                        persons: [{
                            avatar: {
                                src: '<img src="assets/img/person/1.jpg" alt="">',
                                backgroundColor: "#ffffff",
                                onlineCircle: !1
                            },
                            text: {
                                title: "Custom Text",
                                description: "Custom Text",
                                online: "Custom Text",
                                offline: "Custom Text"
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
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
                        }, {
                            avatar: {
                                src: '<img src="assets/img/person/2.svg" alt="">',
                                backgroundColor: "#d6dde1",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Custom Text",
                                description: "Custom Text",
                                online: !1,
                                offline: !1
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
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
                        }, {
                            avatar: {
                                src: '<i class="fab fa-whatsapp"></i>',
                                backgroundColor: "#10c379",
                                onlineCircle: !1
                            },
                            text: {
                                title: "Custom Text",
                                description: !1,
                                online: !1,
                                offline: !1
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
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
                        }]
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "single-account-1" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 1,
                        src: '<i class="fab fa-whatsapp"></i>',
                        backgroundColor: "#10c379",
                        effect: 1,
                        notificationNumber: "1",
                        speechBubble: "How can we help you?",
                        pulseEffect: !0,
                        text: {
                            title: "Need help? Chat with us",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        }
                    },
                    popup: {
                        automaticOpen: !0,
                        outsideClickClosePopup: !0,
                        effect: 1,
                        header: {
                            backgroundColor: "#10c379"
                        },
                        persons: [{
                            avatar: {
                                src: '<img src="assets/img/person/1.jpg" alt="">',
                                backgroundColor: "#ffffff",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                message: "Hi there &#128578;<br>How can I help you?",
                                textbox: "Say anything!",
                                button: !1
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
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
                        }]
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "single-account-2" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 1,
                        src: '<i class="fab fa-whatsapp"></i>',
                        backgroundColor: "#10c379",
                        effect: 1,
                        notificationNumber: "1",
                        speechBubble: "How can we help you?",
                        pulseEffect: !0,
                        text: {
                            title: "Need help? Chat with us",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        }
                    },
                    popup: {
                        automaticOpen: !0,
                        outsideClickClosePopup: !0,
                        effect: 1,
                        header: {
                            backgroundColor: "#10c379"
                        },
                        persons: [{
                            avatar: {
                                src: '<img src="assets/img/person/1.svg" alt="">',
                                backgroundColor: "#d6dde1",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Lorna Hensley",
                                description: "Customer Support",
                                message: !1,
                                textbox: "Say anything!",
                                button: !1
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
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
                        }]
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "single-account-3" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 1,
                        src: '<i class="fab fa-whatsapp"></i>',
                        backgroundColor: "#10c379",
                        effect: 1,
                        notificationNumber: "1",
                        speechBubble: "How can we help you?",
                        pulseEffect: !0,
                        text: {
                            title: "Need help? Chat with us",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        }
                    },
                    popup: {
                        automaticOpen: !0,
                        outsideClickClosePopup: !0,
                        effect: 1,
                        header: {
                            backgroundColor: "#10c379"
                        },
                        persons: [{
                            avatar: {
                                src: '<img src="assets/img/person/2.jpg" alt="">',
                                backgroundColor: "#ffffff",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                message: "Hi there &#128578;<br>How can I help you?",
                                textbox: !1,
                                button: "Start Chat"
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
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
                        }]
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "single-account-4" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 1,
                        src: '<i class="fab fa-whatsapp"></i>',
                        backgroundColor: "#10c379",
                        effect: 1,
                        notificationNumber: "1",
                        speechBubble: "How can we help you?",
                        pulseEffect: !0,
                        text: {
                            title: "Need help? Chat with us",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        }
                    },
                    popup: {
                        automaticOpen: !0,
                        outsideClickClosePopup: !0,
                        effect: 1,
                        header: {
                            backgroundColor: "#10c379"
                        },
                        persons: [{
                            avatar: {
                                src: '<i class="fab fa-whatsapp"></i>',
                                backgroundColor: "#10c379",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                message: !1,
                                textbox: !1,
                                button: "Start Chat"
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
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
                        }]
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "button-only-1" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 1,
                        src: '<i class="fab fa-whatsapp"></i>',
                        backgroundColor: "#10c379",
                        effect: 1,
                        notificationNumber: "1",
                        speechBubble: "How can we help you?",
                        pulseEffect: !0,
                        text: {
                            title: "Need help? Chat with us",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        },
                        link: {
                            desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                            mobile: "https://wa.me/905377323226/?text=Hi"
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
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "button-only-2" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 2,
                        src: '<img src="assets/img/person/1.jpg" alt="">',
                        backgroundColor: "#10c379",
                        effect: 1,
                        notificationNumber: "1",
                        speechBubble: "I'm online now. I can help you.",
                        pulseEffect: !1,
                        text: {
                            title: "Need help? Chat with me",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        },
                        link: {
                            desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                            mobile: "https://wa.me/905377323226/?text=Hi"
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
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "button-only-3" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 3,
                        src: '<img src="assets/img/person/2.svg" alt="">',
                        backgroundColor: "#10c379",
                        effect: 1,
                        notificationNumber: !1,
                        speechBubble: !1,
                        pulseEffect: !1,
                        text: {
                            title: "Need help? Chat with us",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        },
                        link: {
                            desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                            mobile: "https://wa.me/905377323226/?text=Hi"
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
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "button-only-4" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 4,
                        src: '<img src="assets/img/person/3.jpg" alt="">',
                        backgroundColor: "#10c379",
                        effect: 1,
                        notificationNumber: !1,
                        speechBubble: !1,
                        pulseEffect: !1,
                        text: {
                            title: "Custom Text Custom",
                            description: "Custom Text Custom",
                            online: "Custom Text",
                            offline: "Custom Text"
                        },
                        link: {
                            desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                            mobile: "https://wa.me/905377323226/?text=Hi"
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
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "button-only-5" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 5,
                        src: '<i class="fab fa-whatsapp"></i>',
                        backgroundColor: "#10c379",
                        effect: 1,
                        notificationNumber: !1,
                        speechBubble: !1,
                        pulseEffect: !1,
                        text: {
                            title: "Need help? Chat with us",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        },
                        link: {
                            desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                            mobile: "https://wa.me/905377323226/?text=Hi"
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
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "button-only-6" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 6,
                        src: '<img src="assets/img/person/1.svg" alt="">',
                        backgroundColor: "#10c379",
                        effect: 1,
                        notificationNumber: !1,
                        speechBubble: !1,
                        pulseEffect: !1,
                        text: {
                            title: "Need help? Chat with us",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        },
                        link: {
                            desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                            mobile: "https://wa.me/905377323226/?text=Hi"
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
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                "button-only-7" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 7,
                        src: '<img src="assets/img/person/2.jpg" alt="">',
                        backgroundColor: "#10c379",
                        effect: 1,
                        notificationNumber: !1,
                        speechBubble: !1,
                        pulseEffect: !1,
                        text: {
                            title: "Whatsapp Support Service",
                            description: "Mon-Sat: 10:00/22:00",
                            online: "Now Online",
                            offline: "I will be back soon"
                        },
                        link: {
                            desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                            mobile: "https://wa.me/905377323226/?text=Hi"
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
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                })),
                "telegram" == t && ("multiple-accounts-1" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 1,
                        src: '<i class="fab fa-telegram-plane"></i>',
                        backgroundColor: "#18A3E6",
                        effect: 1,
                        notificationNumber: "1",
                        speechBubble: "How can we help you?",
                        pulseEffect: !0,
                        text: {
                            title: "Need help? Chat with us",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        }
                    },
                    popup: {
                        automaticOpen: !0,
                        outsideClickClosePopup: !0,
                        effect: 1,
                        header: {
                            backgroundColor: "#18A3E6",
                            title: "Need help? Chat with us",
                            description: "Click one of our representatives below"
                        },
                        persons: [{
                            avatar: {
                                src: '<img src="assets/img/person/1.jpg" alt="">',
                                backgroundColor: "#ffffff",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Lorna Hensley",
                                description: "Sales Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://telegram.me/telegram",
                                mobile: !1
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
                        }, {
                            avatar: {
                                src: '<img src="assets/img/person/2.jpg" alt="">',
                                backgroundColor: "#ffffff",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Mattie Simmonds",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://telegram.me/telegram",
                                mobile: !1
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
                        }, {
                            avatar: {
                                src: '<img src="assets/img/person/3.jpg" alt="">',
                                backgroundColor: "#ffffff",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Kole Cleg",
                                description: "Techincal Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://telegram.me/telegram",
                                mobile: !1
                            },
                            onlineDay: {
                                sunday: !1,
                                monday: !1,
                                tuesday: !1,
                                wednesday: !1,
                                thursday: !1,
                                friday: !1,
                                saturday: !1
                            }
                        }]
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                    "multiple-accounts-2" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fab fa-telegram-plane"></i>',
                            backgroundColor: "#18A3E6",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#18A3E6",
                                title: "Need help? Chat with us",
                                description: "Click one of our representatives below"
                            },
                            persons: [{
                                avatar: {
                                    src: '<img src="assets/img/person/1.svg" alt="">',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Lorna Hensley",
                                    description: "Sales Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "https://telegram.me/telegram",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<img src="assets/img/person/2.svg" alt="">',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Mattie Simmonds",
                                    description: "Customer Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "https://telegram.me/telegram",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<img src="assets/img/person/3.svg" alt="">',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Kole Cleg",
                                    description: "Techincal Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "https://telegram.me/telegram",
                                    mobile: !1
                                },
                                onlineDay: {
                                    sunday: !1,
                                    monday: !1,
                                    tuesday: !1,
                                    wednesday: !1,
                                    thursday: !1,
                                    friday: !1,
                                    saturday: !1
                                }
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "multiple-accounts-3" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 3,
                            src: '<i class="fab fa-telegram-plane"></i>',
                            backgroundColor: "#18A3E6",
                            effect: 4,
                            notificationNumber: "2",
                            speechBubble: "Can we help you?",
                            pulseEffect: !1,
                            text: {
                                title: "Telegram Support",
                                description: "Mon-Sat: 10:00/22:00",
                                online: "Now Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#18A3E6",
                                title: "Need help? Chat with us",
                                description: "Click one of our representatives below"
                            },
                            persons: [{
                                avatar: {
                                    src: '<i class="fab fa-telegram-plane"></i>',
                                    backgroundColor: "#18A3E6",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Lorna Hensley",
                                    description: "Sales Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "https://telegram.me/telegram",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-telegram-plane"></i>',
                                    backgroundColor: "#18A3E6",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Mattie Simmonds",
                                    description: "Customer Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "https://telegram.me/telegram",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-telegram-plane"></i>',
                                    backgroundColor: "#18A3E6",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Kole Cleg",
                                    description: "Techincal Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "https://telegram.me/telegram",
                                    mobile: !1
                                },
                                onlineDay: {
                                    sunday: !1,
                                    monday: !1,
                                    tuesday: !1,
                                    wednesday: !1,
                                    thursday: !1,
                                    friday: !1,
                                    saturday: !1
                                }
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "multiple-accounts-4" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 5,
                            src: '<i class="fab fa-telegram-plane"></i>',
                            backgroundColor: "#18A3E6",
                            effect: 7,
                            notificationNumber: "5",
                            speechBubble: "Custom Text",
                            pulseEffect: !1,
                            text: {
                                title: "Custom Text Custom",
                                description: "Custom Text",
                                online: "Custom Text",
                                offline: "Custom Text"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 14,
                            header: {
                                backgroundColor: "#18A3E6",
                                title: "Custom Text",
                                description: "Custom Text"
                            },
                            persons: [{
                                avatar: {
                                    src: '<img src="assets/img/person/1.jpg" alt="">',
                                    backgroundColor: "#ffffff",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Custom Text",
                                    description: "Custom Text",
                                    online: "Custom Text",
                                    offline: "Custom Text"
                                },
                                link: {
                                    desktop: "https://telegram.me/telegram",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<img src="assets/img/person/2.svg" alt="">',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Custom Text",
                                    description: "Custom Text",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://telegram.me/telegram",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-telegram-plane"></i>',
                                    backgroundColor: "#18A3E6",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Custom Text",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://telegram.me/telegram",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "single-account-1" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fab fa-telegram-plane"></i>',
                            backgroundColor: "#18A3E6",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#18A3E6"
                            },
                            persons: [{
                                avatar: {
                                    src: '<img src="assets/img/person/1.jpg" alt="">',
                                    backgroundColor: "#ffffff",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Need help? Chat with us",
                                    description: "Customer Support",
                                    message: "Hi there &#128578;<br>How can I help you?",
                                    textbox: !1,
                                    button: "Start Chat"
                                },
                                link: {
                                    desktop: "https://telegram.me/telegram",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "single-account-2" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fab fa-telegram-plane"></i>',
                            backgroundColor: "#18A3E6",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#18A3E6"
                            },
                            persons: [{
                                avatar: {
                                    src: '<i class="fab fa-telegram-plane"></i>',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Need help? Chat with us",
                                    description: "Customer Support",
                                    message: !1,
                                    textbox: !1,
                                    button: "Start Chat"
                                },
                                link: {
                                    desktop: "https://telegram.me/telegram",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-1" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fab fa-telegram-plane"></i>',
                            backgroundColor: "#18A3E6",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://telegram.me/telegram",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-2" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 2,
                            src: '<img src="assets/img/person/1.jpg" alt="">',
                            backgroundColor: "#18A3E6",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "I'm online now. I can help you.",
                            pulseEffect: !1,
                            text: {
                                title: "Need help? Chat with me",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://telegram.me/telegram",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-3" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 3,
                            src: '<img src="assets/img/person/2.svg" alt="">',
                            backgroundColor: "#18A3E6",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://telegram.me/telegram",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-4" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 4,
                            src: '<img src="assets/img/person/3.jpg" alt="">',
                            backgroundColor: "#18A3E6",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Custom Text Custom",
                                description: "Custom Text Custom",
                                online: "Custom Text",
                                offline: "Custom Text"
                            },
                            link: {
                                desktop: "https://telegram.me/telegram",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-5" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 5,
                            src: '<i class="fab fa-telegram-plane"></i>',
                            backgroundColor: "#18A3E6",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://telegram.me/telegram",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-6" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 6,
                            src: '<img src="assets/img/person/1.svg" alt="">',
                            backgroundColor: "#18A3E6",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://telegram.me/telegram",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-7" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 7,
                            src: '<img src="assets/img/person/2.jpg" alt="">',
                            backgroundColor: "#18A3E6",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Telegram Support Service",
                                description: "Mon-Sat: 10:00/22:00",
                                online: "Now Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://telegram.me/telegram",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    })),
                "messenger" == t && ("multiple-accounts-1" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 1,
                        src: '<i class="fab fa-facebook-messenger"></i>',
                        backgroundColor: "#0084ff",
                        effect: 1,
                        notificationNumber: "1",
                        speechBubble: "How can we help you?",
                        pulseEffect: !0,
                        text: {
                            title: "Need help? Chat with us",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        }
                    },
                    popup: {
                        automaticOpen: !0,
                        outsideClickClosePopup: !0,
                        effect: 1,
                        header: {
                            backgroundColor: "#0084ff",
                            title: "Need help? Chat with us",
                            description: "Click one of our representatives below"
                        },
                        persons: [{
                            avatar: {
                                src: '<img src="assets/img/person/1.jpg" alt="">',
                                backgroundColor: "#ffffff",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Lorna Hensley",
                                description: "Sales Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "http://m.me/cizimmedya",
                                mobile: !1
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
                        }, {
                            avatar: {
                                src: '<img src="assets/img/person/2.jpg" alt="">',
                                backgroundColor: "#ffffff",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Mattie Simmonds",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "http://m.me/cizimmedya",
                                mobile: !1
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
                        }, {
                            avatar: {
                                src: '<img src="assets/img/person/3.jpg" alt="">',
                                backgroundColor: "#ffffff",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Kole Cleg",
                                description: "Techincal Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "http://m.me/cizimmedya",
                                mobile: !1
                            },
                            onlineDay: {
                                sunday: !1,
                                monday: !1,
                                tuesday: !1,
                                wednesday: !1,
                                thursday: !1,
                                friday: !1,
                                saturday: !1
                            }
                        }]
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                    "multiple-accounts-2" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fab fa-facebook-messenger"></i>',
                            backgroundColor: "#0084ff",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#0084ff",
                                title: "Need help? Chat with us",
                                description: "Click one of our representatives below"
                            },
                            persons: [{
                                avatar: {
                                    src: '<img src="assets/img/person/1.svg" alt="">',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Lorna Hensley",
                                    description: "Sales Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "http://m.me/cizimmedya",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<img src="assets/img/person/2.svg" alt="">',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Mattie Simmonds",
                                    description: "Customer Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "http://m.me/cizimmedya",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<img src="assets/img/person/3.svg" alt="">',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Kole Cleg",
                                    description: "Techincal Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "http://m.me/cizimmedya",
                                    mobile: !1
                                },
                                onlineDay: {
                                    sunday: !1,
                                    monday: !1,
                                    tuesday: !1,
                                    wednesday: !1,
                                    thursday: !1,
                                    friday: !1,
                                    saturday: !1
                                }
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "multiple-accounts-3" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 3,
                            src: '<i class="fab fa-facebook-messenger"></i>',
                            backgroundColor: "#0084ff",
                            effect: 4,
                            notificationNumber: "2",
                            speechBubble: "Can we help you?",
                            pulseEffect: !1,
                            text: {
                                title: "Messenger Support",
                                description: "Mon-Sat: 10:00/22:00",
                                online: "Now Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#0084ff",
                                title: "Need help? Chat with us",
                                description: "Click one of our representatives below"
                            },
                            persons: [{
                                avatar: {
                                    src: '<i class="fab fa-facebook-messenger"></i>',
                                    backgroundColor: "#0084ff",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Lorna Hensley",
                                    description: "Sales Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "http://m.me/cizimmedya",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-facebook-messenger"></i>',
                                    backgroundColor: "#0084ff",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Mattie Simmonds",
                                    description: "Customer Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "http://m.me/cizimmedya",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-facebook-messenger"></i>',
                                    backgroundColor: "#0084ff",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Kole Cleg",
                                    description: "Techincal Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "http://m.me/cizimmedya",
                                    mobile: !1
                                },
                                onlineDay: {
                                    sunday: !1,
                                    monday: !1,
                                    tuesday: !1,
                                    wednesday: !1,
                                    thursday: !1,
                                    friday: !1,
                                    saturday: !1
                                }
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "multiple-accounts-4" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 5,
                            src: '<i class="fab fa-facebook-messenger"></i>',
                            backgroundColor: "#0084ff",
                            effect: 7,
                            notificationNumber: "5",
                            speechBubble: "Custom Text",
                            pulseEffect: !1,
                            text: {
                                title: "Custom Text Custom",
                                description: "Custom Text",
                                online: "Custom Text",
                                offline: "Custom Text"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 14,
                            header: {
                                backgroundColor: "#0084ff",
                                title: "Custom Text",
                                description: "Custom Text"
                            },
                            persons: [{
                                avatar: {
                                    src: '<img src="assets/img/person/1.jpg" alt="">',
                                    backgroundColor: "#ffffff",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Custom Text",
                                    description: "Custom Text",
                                    online: "Custom Text",
                                    offline: "Custom Text"
                                },
                                link: {
                                    desktop: "http://m.me/cizimmedya",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<img src="assets/img/person/2.svg" alt="">',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Custom Text",
                                    description: "Custom Text",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "http://m.me/cizimmedya",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-facebook-messenger"></i>',
                                    backgroundColor: "#0084ff",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Custom Text",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "http://m.me/cizimmedya",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "single-account-1" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fab fa-facebook-messenger"></i>',
                            backgroundColor: "#0084ff",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#0084ff"
                            },
                            persons: [{
                                avatar: {
                                    src: '<img src="assets/img/person/1.jpg" alt="">',
                                    backgroundColor: "#ffffff",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Need help? Chat with us",
                                    description: "Customer Support",
                                    message: "Hi there &#128578;<br>How can I help you?",
                                    textbox: !1,
                                    button: "Start Chat"
                                },
                                link: {
                                    desktop: "http://m.me/cizimmedya",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "single-account-2" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fab fa-facebook-messenger"></i>',
                            backgroundColor: "#0084ff",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#0084ff"
                            },
                            persons: [{
                                avatar: {
                                    src: '<i class="fab fa-facebook-messenger"></i>',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Need help? Chat with us",
                                    description: "Customer Support",
                                    message: !1,
                                    textbox: !1,
                                    button: "Start Chat"
                                },
                                link: {
                                    desktop: "http://m.me/cizimmedya",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-1" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fab fa-facebook-messenger"></i>',
                            backgroundColor: "#0084ff",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "http://m.me/cizimmedya",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-2" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 2,
                            src: '<img src="assets/img/person/1.jpg" alt="">',
                            backgroundColor: "#0084ff",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "I'm online now. I can help you.",
                            pulseEffect: !1,
                            text: {
                                title: "Need help? Chat with me",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "http://m.me/cizimmedya",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-3" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 3,
                            src: '<img src="assets/img/person/2.svg" alt="">',
                            backgroundColor: "#0084ff",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "http://m.me/cizimmedya",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-4" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 4,
                            src: '<img src="assets/img/person/3.jpg" alt="">',
                            backgroundColor: "#0084ff",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Custom Text Custom",
                                description: "Custom Text Custom",
                                online: "Custom Text",
                                offline: "Custom Text"
                            },
                            link: {
                                desktop: "http://m.me/cizimmedya",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-5" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 5,
                            src: '<i class="fab fa-facebook-messenger"></i>',
                            backgroundColor: "#0084ff",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "http://m.me/cizimmedya",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-6" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 6,
                            src: '<img src="assets/img/person/1.svg" alt="">',
                            backgroundColor: "#0084ff",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "http://m.me/cizimmedya",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-7" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 7,
                            src: '<img src="assets/img/person/2.jpg" alt="">',
                            backgroundColor: "#0084ff",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Messenger Support Service",
                                description: "Mon-Sat: 10:00/22:00",
                                online: "Now Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "http://m.me/cizimmedya",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    })),
                "skype" == t && ("multiple-accounts-1" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 1,
                        src: '<i class="fab fa-skype"></i>',
                        backgroundColor: "#00aff0",
                        effect: 1,
                        notificationNumber: "1",
                        speechBubble: "How can we help you?",
                        pulseEffect: !0,
                        text: {
                            title: "Need help? Chat with us",
                            description: "Customer Support",
                            online: "I'm Online",
                            offline: "I will be back soon"
                        }
                    },
                    popup: {
                        automaticOpen: !0,
                        outsideClickClosePopup: !0,
                        effect: 1,
                        header: {
                            backgroundColor: "#00aff0",
                            title: "Need help? Chat with us",
                            description: "Click one of our representatives below"
                        },
                        persons: [{
                            avatar: {
                                src: '<img src="assets/img/person/1.jpg" alt="">',
                                backgroundColor: "#ffffff",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Lorna Hensley",
                                description: "Sales Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                mobile: !1
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
                        }, {
                            avatar: {
                                src: '<img src="assets/img/person/2.jpg" alt="">',
                                backgroundColor: "#ffffff",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Mattie Simmonds",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                mobile: !1
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
                        }, {
                            avatar: {
                                src: '<img src="assets/img/person/3.jpg" alt="">',
                                backgroundColor: "#ffffff",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Kole Cleg",
                                description: "Techincal Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                mobile: !1
                            },
                            onlineDay: {
                                sunday: !1,
                                monday: !1,
                                tuesday: !1,
                                wednesday: !1,
                                thursday: !1,
                                friday: !1,
                                saturday: !1
                            }
                        }]
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                    "multiple-accounts-2" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fab fa-skype"></i>',
                            backgroundColor: "#00aff0",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#00aff0",
                                title: "Need help? Chat with us",
                                description: "Click one of our representatives below"
                            },
                            persons: [{
                                avatar: {
                                    src: '<img src="assets/img/person/1.svg" alt="">',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Lorna Hensley",
                                    description: "Sales Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<img src="assets/img/person/2.svg" alt="">',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Mattie Simmonds",
                                    description: "Customer Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<img src="assets/img/person/3.svg" alt="">',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Kole Cleg",
                                    description: "Techincal Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                    mobile: !1
                                },
                                onlineDay: {
                                    sunday: !1,
                                    monday: !1,
                                    tuesday: !1,
                                    wednesday: !1,
                                    thursday: !1,
                                    friday: !1,
                                    saturday: !1
                                }
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "multiple-accounts-3" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 3,
                            src: '<i class="fab fa-skype"></i>',
                            backgroundColor: "#00aff0",
                            effect: 4,
                            notificationNumber: "2",
                            speechBubble: "Can we help you?",
                            pulseEffect: !1,
                            text: {
                                title: "Skype Support",
                                description: "Mon-Sat: 10:00/22:00",
                                online: "Now Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#00aff0",
                                title: "Need help? Chat with us",
                                description: "Click one of our representatives below"
                            },
                            persons: [{
                                avatar: {
                                    src: '<i class="fab fa-skype"></i>',
                                    backgroundColor: "#00aff0",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Lorna Hensley",
                                    description: "Sales Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-skype"></i>',
                                    backgroundColor: "#00aff0",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Mattie Simmonds",
                                    description: "Customer Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-skype"></i>',
                                    backgroundColor: "#00aff0",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Kole Cleg",
                                    description: "Techincal Support",
                                    online: "I'm Online",
                                    offline: "I will be back soon"
                                },
                                link: {
                                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                    mobile: !1
                                },
                                onlineDay: {
                                    sunday: !1,
                                    monday: !1,
                                    tuesday: !1,
                                    wednesday: !1,
                                    thursday: !1,
                                    friday: !1,
                                    saturday: !1
                                }
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "multiple-accounts-4" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 5,
                            src: '<i class="fab fa-skype"></i>',
                            backgroundColor: "#00aff0",
                            effect: 7,
                            notificationNumber: "5",
                            speechBubble: "Custom Text",
                            pulseEffect: !1,
                            text: {
                                title: "Custom Text Custom",
                                description: "Custom Text",
                                online: "Custom Text",
                                offline: "Custom Text"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 14,
                            header: {
                                backgroundColor: "#00aff0",
                                title: "Custom Text",
                                description: "Custom Text"
                            },
                            persons: [{
                                avatar: {
                                    src: '<img src="assets/img/person/1.jpg" alt="">',
                                    backgroundColor: "#ffffff",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Custom Text",
                                    description: "Custom Text",
                                    online: "Custom Text",
                                    offline: "Custom Text"
                                },
                                link: {
                                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<img src="assets/img/person/2.svg" alt="">',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Custom Text",
                                    description: "Custom Text",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-skype"></i>',
                                    backgroundColor: "#00aff0",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Custom Text",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "single-account-1" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fab fa-skype"></i>',
                            backgroundColor: "#00aff0",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#00aff0"
                            },
                            persons: [{
                                avatar: {
                                    src: '<img src="assets/img/person/1.jpg" alt="">',
                                    backgroundColor: "#ffffff",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Need help? Chat with us",
                                    description: "Customer Support",
                                    message: "Hi there &#128578;<br>How can I help you?",
                                    textbox: !1,
                                    button: "Start Chat"
                                },
                                link: {
                                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "single-account-2" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fab fa-skype"></i>',
                            backgroundColor: "#00aff0",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#00aff0"
                            },
                            persons: [{
                                avatar: {
                                    src: '<i class="fab fa-skype"></i>',
                                    backgroundColor: "#d6dde1",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Need help? Chat with us",
                                    description: "Customer Support",
                                    message: !1,
                                    textbox: !1,
                                    button: "Start Chat"
                                },
                                link: {
                                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-1" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fab fa-skype"></i>',
                            backgroundColor: "#00aff0",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-2" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 2,
                            src: '<img src="assets/img/person/1.jpg" alt="">',
                            backgroundColor: "#00aff0",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "I'm online now. I can help you.",
                            pulseEffect: !1,
                            text: {
                                title: "Need help? Chat with me",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-3" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 3,
                            src: '<img src="assets/img/person/2.svg" alt="">',
                            backgroundColor: "#00aff0",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-4" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 4,
                            src: '<img src="assets/img/person/3.jpg" alt="">',
                            backgroundColor: "#00aff0",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Custom Text Custom",
                                description: "Custom Text Custom",
                                online: "Custom Text",
                                offline: "Custom Text"
                            },
                            link: {
                                desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-5" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 5,
                            src: '<i class="fab fa-skype"></i>',
                            backgroundColor: "#00aff0",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-6" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 6,
                            src: '<img src="assets/img/person/1.svg" alt="">',
                            backgroundColor: "#00aff0",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "button-only-7" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 7,
                            src: '<img src="assets/img/person/2.jpg" alt="">',
                            backgroundColor: "#00aff0",
                            effect: 1,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Skype Support Service",
                                description: "Mon-Sat: 10:00/22:00",
                                online: "Now Online",
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                mobile: !1
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
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    })),
                "different" == t && ("mixed-accounts" == o && e("#example").czmChatSupport({
                    button: {
                        position: "right",
                        style: 1,
                        src: '<i class="fas fa-life-ring"></i>',
                        backgroundColor: "#decd0d",
                        effect: 4,
                        notificationNumber: "1",
                        speechBubble: "How can we help you?",
                        pulseEffect: !0,
                        text: {
                            title: "Need help? Chat with us",
                            description: !1,
                            online: "Now Online",
                            offline: "I will be back soon"
                        }
                    },
                    popup: {
                        automaticOpen: !0,
                        outsideClickClosePopup: !0,
                        effect: 11,
                        header: {
                            backgroundColor: "#decd0d",
                            title: "Need help? Chat with us",
                            description: "Click one of our representatives below"
                        },
                        persons: [{
                            avatar: {
                                src: '<i class="fab fa-whatsapp"></i>',
                                backgroundColor: "#10c379",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Whatsapp",
                                description: "Sales Support",
                                online: !1,
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                mobile: "https://wa.me/905377323226/?text=Hi"
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
                        }, {
                            avatar: {
                                src: '<i class="fab fa-telegram-plane"></i>',
                                backgroundColor: "#18A3E6",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Telegram",
                                description: "Customer Support",
                                online: !1,
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "https://telegram.me/telegram",
                                mobile: !1
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
                        }, {
                            avatar: {
                                src: '<i class="fab fa-facebook-messenger"></i>',
                                backgroundColor: "#0084ff",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Messenger",
                                description: "Techincal Support",
                                online: !1,
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "http://m.me/cizimmedya",
                                mobile: !1
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
                        }, {
                            avatar: {
                                src: '<i class="fab fa-skype"></i>',
                                backgroundColor: "#00aff0",
                                onlineCircle: !0
                            },
                            text: {
                                title: "Skype",
                                description: "Sales Support",
                                online: !1,
                                offline: "I will be back soon"
                            },
                            link: {
                                desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                mobile: !1
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
                        }]
                    },
                    sound: !0,
                    changeBrowserTitle: "New Message!",
                    cookie: !1
                }),
                    "more-mixed-accounts" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fas fa-comment"></i>',
                            backgroundColor: "#01AAFF",
                            effect: 5,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: !1,
                                online: "Now Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 14,
                            header: {
                                backgroundColor: "#01AAFF",
                                title: "Need help? Chat with us",
                                description: "Choose an account to get support"
                            },
                            persons: [{
                                avatar: {
                                    src: '<i class="fab fa-whatsapp"></i>',
                                    backgroundColor: "#10c379",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Whatsapp",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                                    mobile: "https://wa.me/905377323226/?text=Hi"
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-telegram-plane"></i>',
                                    backgroundColor: "#18A3E6",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Telegram",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://telegram.me/telegram",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-facebook-messenger"></i>',
                                    backgroundColor: "#0084ff",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Messenger",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "http://m.me/cizimmedya",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-skype"></i>',
                                    backgroundColor: "#00aff0",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Skype",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-linkedin-in"></i>',
                                    backgroundColor: "#0a66c2",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "LinkedIn",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://www.linkedin.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-twitter"></i>',
                                    backgroundColor: "#1da1f2",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Twitter",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://twitter.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-instagram"></i>',
                                    backgroundColor: "#f05c94",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Instagram",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://www.instagram.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-viber"></i>',
                                    backgroundColor: "#8F5DB7",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Viber",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://www.viber.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fas fa-envelope"></i>',
                                    backgroundColor: "#FF643A",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "E-mail",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "mailto:email@website.com",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fas fa-phone-alt"></i>',
                                    backgroundColor: "#4EB625",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Call",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "tel:+1234567890",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fas fa-sms"></i>',
                                    backgroundColor: "#ec2d24",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "SMS",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "sms:+1234567890",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "follow-us" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 5,
                            src: '<i class="fas fa-share-alt"></i>',
                            backgroundColor: "#8f3dca",
                            effect: 5,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Follow Us",
                                description: "Our social media accounts",
                                online: !1,
                                offline: !1
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 7,
                            header: {
                                backgroundColor: "#8f3dca",
                                title: "Our social media accounts",
                                description: "Follow us on social media"
                            },
                            persons: [{
                                avatar: {
                                    src: '<i class="fab fa-facebook-f"></i>',
                                    backgroundColor: "#1877f2",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Facebook",
                                    description: "@facebook_address",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://www.facebook.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-twitter"></i>',
                                    backgroundColor: "#1da1f2",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Twitter",
                                    description: "@twitter_address",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://twitter.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-instagram"></i>',
                                    backgroundColor: "#da4169",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Instagram",
                                    description: "@instagram_address",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://www.instagram.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-youtube"></i>',
                                    backgroundColor: "#FF0000",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "YouTube",
                                    description: "@youtube_address",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://youtube.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-tumblr"></i>',
                                    backgroundColor: "#35465c",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Tumblr",
                                    description: "@tumblr_address",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://www.tumblr.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-snapchat-ghost"></i>',
                                    backgroundColor: "#ffc800",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Snapchat",
                                    description: "@snapchat_address",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://www.snapchat.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-pinterest-p"></i>',
                                    backgroundColor: "#CB2028",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Pinterest",
                                    description: "@pinterest_address",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://www.pinterest.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-linkedin-in"></i>',
                                    backgroundColor: "#0a66c2",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "LinkedIn",
                                    description: "@linkedin_address",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://www.linkedin.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-tiktok"></i>',
                                    backgroundColor: "#010101",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Tiktok",
                                    description: "@tiktok_address",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://www.tiktok.com/",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fab fa-foursquare"></i>',
                                    backgroundColor: "#FA4779",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Foursquare",
                                    description: "@foursquare_address",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://foursquare.com/",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "contact-us" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 3,
                            src: '<i class="fas fa-info-circle"></i>',
                            backgroundColor: "#ed2d34",
                            effect: 5,
                            notificationNumber: !1,
                            speechBubble: !1,
                            pulseEffect: !1,
                            text: {
                                title: "Contact Us",
                                description: "Our Contact Information",
                                online: "24/7 contact us",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 8,
                            header: {
                                backgroundColor: "#ed2d34",
                                title: "Our Contact Information",
                                description: "You can contact us 24/7 at any time"
                            },
                            persons: [{
                                avatar: {
                                    src: '<i class="fas fa-phone-alt"></i>',
                                    backgroundColor: "#ed2d34",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "+1234567890",
                                    description: "Phone Number",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "tel:+1234567890",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fas fa-envelope"></i>',
                                    backgroundColor: "#ed2d34",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "email@website.com",
                                    description: "E-mail Address",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "mailto:email@website.com",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fas fa-map-marker-alt"></i>',
                                    backgroundColor: "#ed2d34",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Office Address",
                                    description: "240 Libety Road, New York",
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "https://www.google.com/maps/@40.7558962,-73.9889626,16z",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "redirect-page" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 3,
                            src: '<i class="fas fa-question-circle"></i>',
                            backgroundColor: "#a07bf7",
                            effect: 2,
                            notificationNumber: "?",
                            speechBubble: "Do you want some help?",
                            pulseEffect: !1,
                            text: {
                                title: "Frequently Asked Questions",
                                description: !1,
                                online: !1,
                                offline: !1
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 4,
                            header: {
                                backgroundColor: "#a07bf7",
                                title: "If you have a trouble",
                                description: "Click one of our pages below"
                            },
                            persons: [{
                                avatar: {
                                    src: '<i class="fas fa-question-circle"></i>',
                                    backgroundColor: "#a07bf7",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "I'm having an error on the purchase page!",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "http://www.website.com/redirect-page",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fas fa-question-circle"></i>',
                                    backgroundColor: "#a07bf7",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "The product I added to the shopping cart is not visible!",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "http://www.website.com/redirect-page",
                                    mobile: !1
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
                            }, {
                                avatar: {
                                    src: '<i class="fas fa-question-circle"></i>',
                                    backgroundColor: "#a07bf7",
                                    onlineCircle: !1
                                },
                                text: {
                                    title: "Where is my cargo? Why is it still not shipped?",
                                    description: !1,
                                    online: !1,
                                    offline: !1
                                },
                                link: {
                                    desktop: "http://www.website.com/redirect-page",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "single-account-1" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fas fa-comment-dots"></i>',
                            backgroundColor: "#41c745",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with me",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#41c745"
                            },
                            persons: [{
                                avatar: {
                                    src: '<img src="assets/img/person/2.svg" alt="">',
                                    backgroundColor: "#ffffff",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Need help? Chat with me",
                                    description: "Customer Support",
                                    message: "Hello<br>We will be happy to support you. How can I help you?",
                                    button: "Let's talk"
                                },
                                link: {
                                    desktop: "http://www.website.com",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }),
                    "single-account-2" == o && e("#example").czmChatSupport({
                        button: {
                            position: "right",
                            style: 1,
                            src: '<i class="fas fa-star"></i>',
                            backgroundColor: "#ffb40b",
                            effect: 1,
                            notificationNumber: "1",
                            speechBubble: "How can we help you?",
                            pulseEffect: !0,
                            text: {
                                title: "Need help? Chat with us",
                                description: "Customer Support",
                                online: "I'm Online",
                                offline: "I will be back soon"
                            }
                        },
                        popup: {
                            automaticOpen: !0,
                            outsideClickClosePopup: !0,
                            effect: 1,
                            header: {
                                backgroundColor: "#ffb40b"
                            },
                            persons: [{
                                avatar: {
                                    src: '<img src="assets/img/person/1.jpg" alt="">',
                                    backgroundColor: "#ffffff",
                                    onlineCircle: !0
                                },
                                text: {
                                    title: "Customer Support",
                                    description: "Lorna Hensley",
                                    button: "Let's talk"
                                },
                                link: {
                                    desktop: "http://www.website.com",
                                    mobile: !1
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
                            }]
                        },
                        sound: !0,
                        changeBrowserTitle: "New Message!",
                        cookie: !1
                    }))
        }),
        e("#button_1_1").czmChatSupport({
            button: {
                position: !1,
                style: 1,
                src: '<i class="fab fa-whatsapp"></i>',
                backgroundColor: "#10c379",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_1_2").czmChatSupport({
            button: {
                position: !1,
                style: 1,
                src: '<i class="fab fa-telegram-plane"></i>',
                backgroundColor: "#18A3E6",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://telegram.me/telegram",
                    mobile: !1
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_1_3").czmChatSupport({
            button: {
                position: !1,
                style: 1,
                src: '<i class="fab fa-facebook-messenger"></i>',
                backgroundColor: "#0084ff",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "http://m.me/cizimmedya",
                    mobile: !1
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_1_4").czmChatSupport({
            button: {
                position: !1,
                style: 1,
                src: '<i class="fab fa-skype"></i>',
                backgroundColor: "#00aff0",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                    mobile: !1
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_1_5").czmChatSupport({
            button: {
                position: !1,
                style: 1,
                src: '<i class="fas fa-life-ring"></i>',
                backgroundColor: "#ff9d2d",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "mailto:support@cizimmedya.com",
                    mobile: !1
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_1_6").czmChatSupport({
            button: {
                position: !1,
                style: 1,
                src: '<img src="assets/img/person/1.jpg" alt="">',
                backgroundColor: "transparent",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_1_7").czmChatSupport({
            button: {
                position: !1,
                style: 1,
                src: '<img src="assets/img/person/2.svg" alt="">',
                backgroundColor: "transparent",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_1_8").czmChatSupport({
            button: {
                position: !1,
                style: 1,
                src: '<i class="fab fa-whatsapp"></i>',
                backgroundColor: "#10c379",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
                },
                onlineDay: {
                    sunday: !1,
                    monday: !1,
                    tuesday: !1,
                    wednesday: !1,
                    thursday: !1,
                    friday: !1,
                    saturday: !1
                }
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_2_1").czmChatSupport({
            button: {
                position: !1,
                style: 2,
                src: '<i class="fab fa-whatsapp"></i>',
                backgroundColor: "#10c379",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_2_2").czmChatSupport({
            button: {
                position: !1,
                style: 2,
                src: '<i class="fab fa-telegram-plane"></i>',
                backgroundColor: "#18A3E6",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://telegram.me/telegram",
                    mobile: !1
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_2_3").czmChatSupport({
            button: {
                position: !1,
                style: 2,
                src: '<img src="assets/img/person/2.jpg" alt="">',
                backgroundColor: "#a857c5",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Custom Text Custom",
                    description: "Custom Text",
                    online: "Custom Text",
                    offline: "Custom Text"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_3_1").czmChatSupport({
            button: {
                position: !1,
                style: 3,
                src: '<i class="fab fa-whatsapp"></i>',
                backgroundColor: "#10c379",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_3_2").czmChatSupport({
            button: {
                position: !1,
                style: 3,
                src: '<i class="fab fa-facebook-messenger"></i>',
                backgroundColor: "#0084ff",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "http://m.me/cizimmedya",
                    mobile: !1
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_3_3").czmChatSupport({
            button: {
                position: !1,
                style: 3,
                src: '<img src="assets/img/person/1.svg" alt="">',
                backgroundColor: "#ec4c4c",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Custom Text Custom",
                    description: "Custom Text",
                    online: "Custom Text",
                    offline: "Custom Text"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_4_1").czmChatSupport({
            button: {
                position: !1,
                style: 4,
                src: '<i class="fab fa-whatsapp"></i>',
                backgroundColor: "#10c379",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_4_2").czmChatSupport({
            button: {
                position: !1,
                style: 4,
                src: '<i class="fab fa-skype"></i>',
                backgroundColor: "#00aff0",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "skype:live:.cid.7b29081175cf6980?chat",
                    mobile: !1
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_4_3").czmChatSupport({
            button: {
                position: !1,
                style: 4,
                src: '<img src="assets/img/person/3.jpg" alt="">',
                backgroundColor: "#ff9d2d",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Custom Text Custom",
                    description: "Custom Text",
                    online: "Custom Text",
                    offline: "Custom Text"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_5_1").czmChatSupport({
            button: {
                position: !1,
                style: 5,
                src: '<i class="fab fa-whatsapp"></i>',
                backgroundColor: "#10c379",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_5_2").czmChatSupport({
            button: {
                position: !1,
                style: 5,
                src: '<i class="fab fa-linkedin-in"></i>',
                backgroundColor: "#0A66C2",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://tr.linkedin.com/company/cizimmedya",
                    mobile: !1
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_5_3").czmChatSupport({
            button: {
                position: !1,
                style: 5,
                src: '<img src="assets/img/person/1.jpg" alt="">',
                backgroundColor: "#de6bcd",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Custom Text Custom",
                    description: "Custom Text",
                    online: "Custom Text",
                    offline: "Custom Text"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_6_1").czmChatSupport({
            button: {
                position: !1,
                style: 6,
                src: '<img src="assets/img/person/1.jpg" alt="">',
                backgroundColor: "#10c379",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_6_2").czmChatSupport({
            button: {
                position: !1,
                style: 6,
                src: '<img src="assets/img/person/2.jpg" alt="">',
                backgroundColor: "#f05c94",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://www.instagram.com/cizimmedyatr/",
                    mobile: !1
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_6_3").czmChatSupport({
            button: {
                position: !1,
                style: 6,
                src: '<img src="assets/img/person/1.svg" alt="">',
                backgroundColor: "#09ccbf",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Custom Text Custom",
                    description: "Custom Text",
                    online: "Custom Text",
                    offline: "Custom Text"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_7_1").czmChatSupport({
            button: {
                position: !1,
                style: 7,
                src: '<img src="assets/img/person/1.jpg" alt="">',
                backgroundColor: "#10c379",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_7_2").czmChatSupport({
            button: {
                position: !1,
                style: 7,
                src: '<img src="assets/img/person/2.jpg" alt="">',
                backgroundColor: "#9e63ce",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Need help? Chat with us",
                    description: "Customer Support",
                    online: "I'm Online",
                    offline: "I will be back soon"
                },
                link: {
                    desktop: "https://www.viber.com/",
                    mobile: !1
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e("#button_7_3").czmChatSupport({
            button: {
                position: !1,
                style: 7,
                src: '<img src="assets/img/person/1.svg" alt="">',
                backgroundColor: "#36aee2",
                effect: 1,
                notificationNumber: !1,
                speechBubble: !1,
                pulseEffect: !1,
                text: {
                    title: "Custom Text Custom",
                    description: "Custom Text",
                    online: "Custom Text",
                    offline: "Custom Text"
                },
                link: {
                    desktop: "https://web.whatsapp.com/send?phone=905377323226&text=Hi",
                    mobile: "https://wa.me/905377323226/?text=Hi"
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
            },
            sound: !1,
            changeBrowserTitle: !1,
            cookie: !1
        }),
        e(".scroll-move").click(function () {
            return e("html, body").animate({
                scrollTop: e(e(this).attr("href")).offset().top
            }, 500),
                !1
        })
}(jQuery);
