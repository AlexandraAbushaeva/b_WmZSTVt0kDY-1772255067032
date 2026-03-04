"use client";

import React from 'react';

export default function PolitikaPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf8] py-12 px-4 sm:px-6 font-sans text-[#4a4a4a]">
      <div className="max-w-3xl mx-auto bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] rounded-[32px] overflow-hidden border border-[#e8e2da]">
        
        {/* Шапка в стиле сайта */}
        <div className="bg-[#f3f0ec] p-10 border-b border-[#e8e2da] text-center">
          <h1 className="text-xl md:text-2xl font-medium text-[#2d2d2d] tracking-tight uppercase">
            Согласие на обработку персональных данных
          </h1>
        </div>

        <div className="p-8 md:p-14 space-y-8 leading-[1.8] text-[15px]">
          
          <section>
            <p>
              Я, заполняя форму на сайте или в социальных сетях Исполнителя 
              <span className="font-bold text-[#1a1a1a]"> (ИНН 352506361894)</span>, 
              действуя добровольно, осознанно и в собственных интересах, даю согласие на обработку моих персональных данных и получение информационных и рекламных сообщений от Исполнителя, включая предложения о новых программах, акциях, мероприятиях, опросах, а также иной информации о продуктах и услугах Исполнителя.
            </p>
          </section>

          <section>
            <p className="font-semibold text-[#2d2d2d] mb-4">
              Настоящее согласие распространяется на использование следующих каналов связи:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b5a48b]" />
                электронная почта;
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b5a48b]" />
                SMS и мессенджеры;
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b5a48b]" />
                телефонные звонки;
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b5a48b]" />
                сообщения в социальных сетях.
              </li>
            </ul>
          </section>

          <section>
            <p>Согласие предоставляется на срок до его отзыва.</p>
            <p className="mt-4">
              Я уведомлён(а), что в любой момент могу отозвать согласие, направив соответствующее обращение на электронную почту: 
              <a href="mailto:n.abushaeva@mail.ru" className="text-[#b5a48b] font-medium underline ml-1">
                n.abushaeva@mail.ru
              </a>
            </p>
          </section>

          <section className="pt-6 border-t border-[#f0ede8]">
            <p>
              Подтверждаю, что предоставленные мной персональные данные принадлежат мне. Я ознакомлен(а) с Политикой обработки персональных данных и Офертой, размещёнными на сайте Исполнителя, и выражаю согласие с их условиями.
            </p>
          </section>

          {/* Кнопки управления */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10">
            <button 
              onClick={() => window.close()}
              className="text-sm text-[#a39a91] hover:text-[#2d2d2d] transition-colors underline underline-offset-4"
            >
              Закрыть страницу
            </button>
            
            <button 
              onClick={() => window.print()}
              className="px-8 py-4 bg-[#e8e2da] hover:bg-[#dfd8cf] text-[#5e5850] rounded-full text-sm font-medium transition-all shadow-sm active:scale-95"
            >
              Распечатать или сохранить PDF
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-12 text-center text-[#c2b9af] text-[10px] uppercase tracking-[0.2em]">
        ИНН 352506361894 • {new Date().getFullYear()}
      </footer>
    </div>
  );
}