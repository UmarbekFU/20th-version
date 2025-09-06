import Navigation from '@/components/Navigation'
import PlumBackground from '@/components/PlumBackground'
import TwitterComments from '@/components/TwitterComments'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/ai/emf/uz')

export default function EverythingIsMyFaultUzbekPage() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Atomic Idea Header */}
          <header className="mb-12">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              2 Sentabr
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Hammasi mening aybim
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Atomik g'oyalar</span>
            </div>
          </header>

          {/* Atomic Idea Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Yillar davomida men dunyoga qarshi g'azablandim.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ular yolg'on gapirdi.<br/>
              Ular foydalandi.<br/>
              Ular so'zlarini bajarmadi
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ritmni eshitasizmi? <em>Ular. Ular. Ular.</em>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Har bir gap boshqalarning ismi bilan boshlanardi, men esa doimo qurbon edim.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Kimdir sizni xafa qilsa, instinkt ularni ayblashdir. Lekin men quyidagi xulosaga keldim:
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Agar kimdir menga yolg'on gapirgan bo'lsa, ehtimol men haqiqatni aytishni juda qimmat qildim.<br/>
              Agar kimdir foydalangan bo'lsa, ehtimol men eshikni ochiq qoldirib, buni ishonch deb atadim.<br/>
              Agar kimdir so'zini bajarmagan bo'lsa, ehtimol men va'dalarga emas, balki dalillarga tayanib qurgan edim.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              "Bu mening aybim" degani: <em>Men nazoratda.</em>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              To'satdan men zulm qilingan emas edim. Ular faqat men yaratgan vaziyatda o'z rolini o'ynayotgan edi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Men buni amalga oshirdim.<br/>
              Men bundan o'rganishim mumkin.<br/>
              Shikoyat qilishga hech narsa yo'q.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hammasi mening aybim ekanligini qaror qilish g'alati qiziq edi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Kechirimdan yaxshiroq. Kechirim sizni hali ham qurbon sifatida qoldiradi, ular hujumchi ekanligini taxmin qiladi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Kimdir meni umidsizlikka tushirgan bo'lsa, mening aybim.<br/>
              Men ularga bog'lanmasligim mumkin edi.<br/>
              Men ishonchliroq odamni tanlashim mumkin edi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Agar hukumatim yomon bo'lsa, mening aybim.<br/>
              Men ovoz berishim, qatnashishim yoki boshqa joyga ko'chishim mumkin edi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Agar boshligim menga yomon muomala qilsa, mening aybim.<br/>
              Men ishimda yaxshilashishim, yangi ish topishim yoki o'z biznesimni boshlashim mumkin edi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Mas'uliyatni olsangiz, muammoni hal qilish kuchini saqlaysiz.<br/>
              Agar olmasangiz, bu kuchni boshqalarga berasiz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Mas'uliyat agentlikka teng.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Shikoyat qilish = <em>Menda kuch yo'q</em> degani.<br/>
              Bu "Men buni o'zgartira olmayman, shuning uchun shunchaki shikoyat qilaman."
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              "Barcha yaxshi imkoniyatlar olingan."<br/>
              "Boy bo'lmagan holda muvaffaqiyatga erishib bo'lmaydi."<br/>
              "Tizim soxtalashtirilgan."
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ha, hayot adolatli emas.<br/>
              Dunyo qiyalik.<br/>
              Lekin hammasi omad emas.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Sizning harakatlaringiz natijalarni o'zgartiradi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              O'nlab yillar davomida, chidamlilik omaddan ustun keladi.<br/>
              Ajoyib narsa vaqt.<br/>
              Muvaffaqiyat siz o'ylagandan uzoqroq vaqt oladi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Shuning uchun ko'rinish muhim. Aleksandr Buyuk "dunyo imperiyasi"ni orzu qildi, Napoleon Yevropani fransuz ta'siri ostida birlashtirishni, Uolt Disney Disneyland va Disney Worldni, Bezos "hamma narsa do'koni"ni, Jobs iPad mavjud bo'lishidan o'nlab yillar oldin orzu qildi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Katta ko'rinish sizni uni haqiqiy qilish uchun etarlicha uzoq davom etishga majbur qiladi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Agar hech narsani o'zgartira olmasligingizga ishonsangiz, urinmaysiz. Agar urinmasangiz, o'zingizni to'g'ri deb isbotlaysiz. Kinizm o'z-o'zini amalga oshiradigan bo'ladi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Yana ham yomonroq, biz ko'pincha muvaffaqiyatsizlikka uchramoqchi bo'lganda maslahat so'raymiz. Keyin maslahat beruvchini ayblashimiz mumkin.<br/>
              Biz o'zimizni qurbon bo'lishga tayyorlaymiz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hammasi sizning aybingiz bo'lsa, qurbon bo'lishni to'xtatasiz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Siz narsalar sodir bo'ladigan odam bo'lishni to'xtatasiz.<br/>
              Siz narsalarni amalga oshiradigan odam bo'lasiz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              O'zingizni ayblang • Mas'uliyat oling • Agentligingizni saqlang • O'zingizni qutqaring
            </p>
          </article>

          {/* Twitter Comments */}
          <TwitterComments 
            title="Hammasi mening aybim"
          />

          {/* Read in Other Languages */}
          <section className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              Boshqa tillarda o'qing: <Link href="/ai/emf" className="text-blue-600 dark:text-blue-400 hover:underline">English</Link>, <Link href="/ai/emf/ru" className="text-blue-600 dark:text-blue-400 hover:underline">Русский</Link>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
