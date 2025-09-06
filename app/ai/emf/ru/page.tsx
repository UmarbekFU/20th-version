import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import TwitterComments from '@/components/TwitterComments'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/ai/emf/ru')

export default function EverythingIsMyFaultRussianPage() {
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
              Всё моя вина
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Атомные идеи</span>
            </div>
          </header>

          {/* Atomic Idea Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Годами я злился на мир.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Они лгали.<br/>
              Они пользовались мной.<br/>
              Они не сдерживали слово
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Слышите ритм? <em>Они. Они. Они.</em>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Каждое предложение начиналось с чужого имени, а я всегда был жертвой.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Когда кто-то расстраивает вас, инстинкт — обвинить их. Но я пришёл к выводу:
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Если кто-то солгал мне, возможно, я сделал правду слишком дорогой для произнесения.<br/>
              Если кто-то воспользовался мной, возможно, я оставил дверь открытой и назвал это доверием.<br/>
              Если кто-то не сдержал слово, возможно, я строил на обещаниях вместо доказательств.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Сказать "это моя вина" означает: <em>Я контролирую ситуацию.</em>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Внезапно я не был обижен. Они просто играли свою роль в ситуации, которую я помог создать.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Я это сделал.<br/>
              Я могу извлечь урок.<br/>
              Не на что жаловаться.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Было странно радостно решить, что всё моя вина.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Лучше прощения. Прощение всё ещё оставляет вас жертвой, всё ещё предполагает, что они были агрессором.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Когда кто-то меня подвёл, моя вина.<br/>
              Я мог не зависеть от них.<br/>
              Я мог выбрать кого-то более надёжного.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Когда моё правительство плохое, моя вина.<br/>
              Я мог голосовать, участвовать или переехать в другое место.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Когда начальник плохо со мной обращается, моя вина.<br/>
              Я мог стать лучше в работе, найти новую работу или начать свой бизнес.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Когда вы берёте ответственность, вы сохраняете силу решить проблему.<br/>
              Если не берёте, вы отдаёте эту силу.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ответственность равна агентности.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Жаловаться = говорить <em>У меня нет силы.</em><br/>
              Это "Я не могу это изменить, поэтому просто буду ныть."
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              "Все хорошие возможности заняты."<br/>
              "Нельзя преуспеть, если ты не богат."<br/>
              "Система подстроена."
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Да, жизнь несправедлива.<br/>
              Мир наклонён.<br/>
              Но не всё дело в удаче.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ваши действия меняют результаты.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              За десятилетия упорство побеждает удачу.<br/>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Фокус в том, что успех занимает больше времени, чем вы думаете.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Поэтому видение важно. Александр Великий мечтал о "мировой империи", Наполеон об объединённой Европе под французским влиянием, Уолт Дисней о Диснейленде и Дисней Уорлде, Безос о "магазине всего", Джобс об iPad за десятилетия до его существования.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Большое видение заставляет вас продолжать достаточно долго, чтобы сделать его реальным.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Если вы верите, что не можете ничего изменить, вы не попробуете. Если не попробуете, вы докажете себе правоту. Цинизм становится самоисполняющимся.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ещё хуже, мы часто просим совета, когда тайно хотим потерпеть неудачу. Тогда мы можем обвинить советчика.<br/>
              Мы настраиваем себя быть жертвами.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Когда всё ваша вина, вы перестаёте быть жертвой.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Вы перестаёте быть тем, с кем что-то происходит.<br/>
              Вы становитесь тем, кто делает что-то происходить.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Обвините себя • Возьмите ответственность • Сохраните агентность • Спасите себя
            </p>
          </article>

          {/* Twitter Comments */}
          <TwitterComments 
            title="Всё моя вина"
          />

          {/* Read in Other Languages */}
          <section className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              Читать на других языках: <Link href="/ai/emf" className="text-blue-600 dark:text-blue-400 hover:underline">English</Link>, <Link href="/ai/emf/uz" className="text-blue-600 dark:text-blue-400 hover:underline">O'zbekcha</Link>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
