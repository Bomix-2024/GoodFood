'use client'
import { useEffect, useState } from 'react';
import { translateText } from '@/util/index';
import Image from 'next/image';

export default function Translate() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleTranslate = async (defaultLanguage:string) => {
        localStorage.setItem('language', defaultLanguage);
        setLanguage(defaultLanguage);
        var allElementsToTranslate = document.querySelectorAll('[data-translate]');
        allElementsToTranslate.forEach(async element => {
            const translated = await translateText(element.innerHTML, defaultLanguage ? defaultLanguage : language);
            element.innerHTML = translated;
        })
        setIsOpen(false);
    };

    useEffect(() => {
        var defaultLanguage = localStorage.getItem('language');
        if (defaultLanguage && defaultLanguage != '' && defaultLanguage != 'pt') {
            handleTranslate(defaultLanguage);
            setLanguage(defaultLanguage);
        }
    }, [])

    return (
        <>
            <div className="inline-block text-left fixed bottom-2 left-2">
                {isOpen && (
                    <div
                        className="absolute left-0 z-10 -top-40 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                    >
                        <div className="py-1" role="none">
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                id="menu-item-0"
                                onClick={() => handleTranslate('pt')}
                            >
                                <div>
                                    <Image width={25} height={25} alt='Brazil' src="https://flagdownload.com/wp-content/uploads/Flag_of_Brazil-1024x716.png" className="w-6 h-5 inline-block" />
                                    <span className="cursor-pointer inline-block px-2">Português</span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                id="menu-item-1"
                                onClick={() => handleTranslate('en')}
                            >
                                <div>
                                    <Image width={25} height={25} alt='UK' src="https://flagdownload.com/wp-content/uploads/Flag_of_United_Kingdom-1024x512.png" className="w-6 h-5 inline-block" />
                                    <span className="cursor-pointer inline-block px-2">English</span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                id="menu-item-2"
                                onClick={() => handleTranslate('es')}
                            >
                                <div>
                                    <Image width={25} height={25} alt='Spain' src="https://flagdownload.com/wp-content/uploads/Flag_of_Spain-1024x683.png" className="w-6 h-5 inline-block" />
                                    <span className="cursor-pointer inline-block px-2">Español</span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                id="menu-item-2"
                                onClick={() => handleTranslate('ar')}
                            >
                                <div>
                                    <Image width={25} height={25} alt='Arab' src="https://flagdownload.com/wp-content/uploads/Flag_of_United_Arab_Emirates-1024x512.png" className="w-6 h-5 inline-block" />
                                    <span className="cursor-pointer inline-block px-2">العربية</span>
                                </div>
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                id="menu-item-2"
                                onClick={() => handleTranslate('zh')}
                            >
                                <div>
                                    <Image width={25} height={25} alt='China' src="https://flagdownload.com/wp-content/uploads/Flag_of_Peoples_Republic_of_China-1024x683.png" className="w-6 h-5 inline-block" />
                                    <span className="cursor-pointer inline-block px-2">中国人</span>
                                </div>
                            </a>
                        </div>
                    </div>
                )}
                <div>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        id="menu-button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={toggleDropdown}
                    >
                        {(() => {
                            switch (language) {
                                case 'pt':
                                    return <>
                                        <div>
                                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Brazil-1024x716.png" className="w-6 h-5 inline-block" />
                                            <span className="cursor-pointer inline-block px-2">Português</span>
                                        </div>
                                    </>
                                case 'en':
                                    return <>
                                        <div>
                                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_United_Kingdom-1024x512.png" className="w-6 h-5 inline-block" />
                                            <span className="cursor-pointer inline-block px-2">English</span>
                                        </div>
                                    </>
                                case 'es':
                                    return <>
                                        <div>
                                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Spain-1024x683.png" className="w-6 h-5 inline-block" />
                                            <span className="cursor-pointer inline-block px-2">Español</span>
                                        </div>
                                    </>
                                case 'zh':
                                    return <>
                                        <div>
                                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Peoples_Republic_of_China-1024x683.png" className="w-6 h-5 inline-block" />
                                            <span className="cursor-pointer inline-block px-2">中国人</span>
                                        </div>
                                    </>
                                case 'ar':
                                    return <>
                                        <div>
                                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_United_Arab_Emirates-1024x512.png" className="w-6 h-5 inline-block" />
                                            <span className="cursor-pointer inline-block px-2">العربية</span>
                                        </div>
                                    </>
                                default:
                                    return <>
                                        <div>
                                            <img src="https://flagdownload.com/wp-content/uploads/Flag_of_Brazil-1024x716.png" className="w-6 h-5 inline-block" />
                                            <span className="cursor-pointer inline-block px-2">Português</span>
                                        </div>
                                    </>
                            }
                        })()}
                    </button>

                </div>
            </div>
        </>
    )
}