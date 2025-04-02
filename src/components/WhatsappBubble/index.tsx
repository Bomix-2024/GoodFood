'use client';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import '../../../public/plugins/whatsapp-bubble/whatsapp-chat-support.css';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';

interface ConfigInterface {
    config: {
        whatsapp_chat: {
            agents: {
                name: string;
                role: string;
                image: string;
                number: string;
                default_msg: string;
            }[];
        };
    };
}

export default function WhatsappBubble({ config}: ConfigInterface) {

    useEffect(() => {
        function loadScript(src: string) {
            return new Promise((resolve, reject) => {
                var script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.setAttribute('data-config-wp', JSON.stringify(config) || ``);
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }

        loadScript('/plugins/whatsapp-bubble/jquery-1.11.3.min.js')
            .then(() => {
                return loadScript('/plugins/whatsapp-bubble/moment.min.js');
            })
            .then(() => {
                return loadScript('/plugins/whatsapp-bubble/moment-timezone-with-data-10-year-range.min.js');
            })
            .then(() => {
                return loadScript('/plugins/whatsapp-bubble/whatsapp-chat-support.js');
            })
            .then(() => {
                return loadScript('/plugins/whatsapp-bubble/whatsapp-config.js')
            })
            .catch(error => {
                console.error('Erro ao carregar o script:', error);
            });

    }, []);



    return (
        <>
        <div id="example"></div>
        </>
    );
}
