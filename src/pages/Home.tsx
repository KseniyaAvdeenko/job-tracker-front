import React from 'react';
import MainImg from '../assets/images/20608.jpg'

const Home = () => {
    return (
        <main className={'w-full flex flex-col px-32 py-16 '}>
            <h1 className="font-black text-center text-7xl text-accent-200 mb-10">JobTracker</h1>

            <div className="grid auto-rows-min gap-x-8 mb-6">
                <div className="bg-no-repeat bg-contain bg-center self-center"
                     style={{backgroundImage: `url(${MainImg})`, width: '100%', height: '40rem'}}>
                </div>
                <h3 className="self-center font-black text-4xl text-center text-text-200 mb-6">Добро пожаловать в
                    JobTracker — простой и удобный инструмент для управления и отслеживания ваших откликов на вакансии!</h3>
            </div>

            <div className="grid grid-cols-1 auto-rows-min gap-y-8 my-10">
                <h3 className="font-black text-center text-5xl text-text-200">Что такое JobTracker?</h3>
                <p className="font-black text-center text-3xl text-text-200">
                    JobTracker — это система для управления откликами на вакансии, которая поможет вам хранить все
                    данные о процессе поиска работы в одном месте. Здесь вы можете:
                </p>

                <div className="grid grid-rows-auto gap-y-6">
                    <p className="text-2xl text-text-100">🏢 Записывать отклики на вакансии:
                        Фиксируйте информацию о каждой вакансии,
                        на которую вы откликнулись,
                        включая название компании, должность, зарплатную вилку и многое другое.</p>
                    <p className="text-2xl text-text-100">📊 Отслеживать статус откликов:
                        Обновляйте статус каждого отклика (например,
                        "Отклик отправлен", "Интервью
                        назначено", "Предложение получено", "Отказ").</p>
                    <p className="text-2xl text-text-100">✏️ Редактировать и управлять записями:
                        Вносите изменения и удаляйте
                        устаревшие записи по мере
                        необходимости.</p>
                    <p className="text-2xl text-text-100">
                        📝 Добавлять заметки: Указывайте важные детали или напоминания для каждой вакансии, такие как
                        даты интервью
                        или контактные данные.
                    </p>
                </div>
            </div>
            <div className={'grid grid-cols-1 auto-rows-auto gap-y-10 my-10'}>
                <p className={'font-black text-center text-3xl text-text-200'}>Почему стоит выбрать JobTracker?</p>
                <div className={"grid grid-cols-3"}>
                    <div className="text-2xl flex flex-col items-center text-text-200">
                        <b className="text-center">Организованность</b>
                        <p className="text-center">Больше никаких громоздких таблиц и разрозненных заметок. Все отклики — в одном месте.</p>
                    </div>
                    <div className="text-2xl flex flex-col items-center text-text-200">
                        <b className="text-center">Увеличение эффективности поиска</b>
                        <p className="text-center">Отслеживайте свой прогресс и быстро определяйте, какие отклики требуют
                        дополнительных действий.</p>
                    </div>
                    <div className="text-2xl flex flex-col items-center text-text-200">
                        <b className="text-center">Персонализация</b>
                        <p className="text-center">Настраивайте отслеживание откликов в зависимости от ваших потребностей и целей.</p>
                    </div>
                </div>
                <p className={'font-black text-center text-3xl text-text-200 mt-4'}>Начните управлять своим поиском работы
                    эффективно с JobTracker! 🚀</p>
                <h3 className="self-center font-black text-center text-4xl text-text-200 mb-6 mt-4">Ваш следующий карьерный
                    шаг уже близко.</h3>
            </div>
        </main>
    );
};

export default Home;
