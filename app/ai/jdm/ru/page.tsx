import Navigation from '@/components/Navigation' 
import PlumBackground from '@/components/PlumBackground'
import TwitterComments from '@/components/TwitterComments'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/ai/jdm/ru')

export default function JustDoMoreRussian() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Atomic Idea Header */}
          <header className="mb-12">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              2 сентября
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Просто делайте больше
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Атомные идеи</span>
            </div>
          </header>

          {/* Atomic Idea Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Люди думают, что наука ведёт к технологиям, а технологии ведут к бизнесу.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Всё наоборот: бизнес ведёт к технологиям, а технологии ведут к науке.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Всё через пробу и ошибку.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Позвольте дать вам мысленный эксперимент.
              Мы хотим приготовить лучшие манты (традиционное блюдо).
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Два подхода:
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              #1 группа случайно добавляет мелкие ингредиенты, проверяет, лучше ли, продолжает пробовать.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              #2 группа идёт в университет и изучает химические уравнения того, что в мантах.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Кто улучшается быстрее? Первая группа, <strong>через пробу и ошибку.</strong>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Это представляет, как технологии действительно развиваются.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Всё делается инженерами и рискующими с большим потенциалом выгоды, чем потерь. Пробу и ошибку нельзя назвать пробой и ошибкой—это проба с маленькой ошибкой и большим потенциальным выигрышем.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Что академики не любят признавать, так это то, что бизнес ведёт к технологиям, которые ведут к науке—гораздо, гораздо, гораздо чаще, чем наоборот.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Реактивный двигатель не был разработан физиками—он был создан инженерами, которые не знали, как он работает. Мы до сих пор не знаем, как работает велосипед.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Паровой двигатель не был изобретён профессорами термодинамики; термодинамика была разработана для понимания паровых двигателей.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Интернет не был создан теоретиками сетей; теория сетей возникла для понимания интернета.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Европейские соборы были построены красиво без евклидовой геометрии, потому что до арабских цифр никто в Европе не мог делать деление. Всё было пробой и ошибкой, разработкой правил, которые работали.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Возня.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Переосмысление—самая большая трата человеческой энергии.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Доверьтесь себе, примите решение и получите больше опыта.
              Нет такой вещи, как совершенство. Вы не можете думать о совершенстве, <strong>просто действуйте.</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-8">
              <strong>Принцип 100x:</strong>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Напишите 100 эссе.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Приготовьте 100 блюд.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Создайте 100 веб-сайтов.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Предложите 100 инвесторам.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Каждое "достаточно хорошее."
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-12">
              Каждое лучше.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Джимми Дональдсон (MrBeast) 8 лет снимал 100+ видео с низким просмотром в подвале мамы—перед своим прорывным хитом. Он безжалостно тестировал миниатюры, заголовки и форматы. Сейчас: 400M+ подписчиков.
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "Первые 100 видео—это практика"
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                До славы The Beatles играли 8-часовые ночные сеты в грязных клубах Гамбурга два года. Они исполняли каверы <strong>1200 раз.</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                Леннон позже сказал: "Мы становились лучше и увереннее. Именно там мы действительно научились играть."
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Перед созданием Minecraft (франшиза за $2.5B) Перссон создал десятки <strong>маленьких, несовершенных</strong> игр. Он выпускал их публично и учился на отзывах.
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "Я не переосмысливал—просто отправлял."
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Первый рассказ Стивена Кинга был отклонён 30 раз. Он продолжал писать и прикалывал отказы к стене. Работая уборщиком, он писал ежедневно, позже опубликовав Кэрри (его четвёртый роман). Он написал 65+ романов.
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "Любители сидят и ждут вдохновения; остальные просто идут на работу."
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Дайсон потратил <strong>15 лет на создание 5126 версий</strong> пылесоса, прежде чем его беспакетный дизайн преуспел.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Эдисон протестировал более <strong>6000 материалов</strong> для нити своей лампочки, знаменито сказав: "Я не потерпел неудачу. Я просто нашёл <strong>10000 способов</strong>, которые не работают." <strong>Его команда работала 18 часов в день годами</strong>. Они приоритизировали скорость экспериментов над безупречными теориями.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Ван Гог рисовал ежедневно, даже когда его высмеивали как "сумасшедшего". Он создал более 900 картин и 1100 набросков, <strong>но продал только одну</strong>. В своих письмах он писал: <strong>"Если вы слышите голос внутри себя, говорящий 'Вы не можете рисовать', то обязательно рисуйте, и этот голос замолчит."</strong>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Сет Годин говорит: <strong>"Стоимость быть неправым меньше стоимости ничего не делать."</strong>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Азимов, один из самых плодовитых авторов в истории, написал более 500 книг по научной фантастике, истории и биохимии. Он следовал строгому ежедневному режиму письма, часто публикуя 10+ книг в год. "Я пишу по той же причине, по которой дышу—потому что если бы не писал, я бы умер," сказал он. (объёмно-первый подход)
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                В 65 лет Сандерс предлагал свой рецепт жареной курицы от двери к двери, получив 1009 отказов, прежде чем ресторан в Юте сказал да. Он готовил партии ежедневно, корректируя специи и технику жарки под давлением. Сегодня: 25000+ ресторанов KFC по всему миру.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Абель Тесфайе (The Weeknd) загружал мрачные, сырые треки на YouTube под псевдонимом годами. Он игнорировал отраслевые нормы, выпустив три бесплатных микстейпа в 2011 году. Дрейк обнаружил его, и House of Balloons стал культовой классикой.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Агата Кристи, "Королева мистики," написала свой первый роман на спор, работая медсестрой. Она опубликовала 66 романов, знаменито сказав: <strong>"Пишите даже когда думаете, что не можете."</strong>
              </p>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 font-bold mt-16 mb-8">
              Просто делайте больше. "Это не 10000 часов. 10000 итераций."
            </p>
          </article>

          {/* Twitter Comments */}
          <TwitterComments 
            title="Просто делайте больше"
          />

          {/* Read in Other Languages */}
          <section className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              Читать на других языках: <Link href="/ai/jdm" className="text-blue-600 dark:text-blue-400 hover:underline">English</Link>, <Link href="/ai/jdm/uz" className="text-blue-600 dark:text-blue-400 hover:underline">O'zbekcha</Link>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
