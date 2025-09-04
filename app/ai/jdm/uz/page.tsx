import Navigation from '@/components/Navigation' 
import PlumBackground from '@/components/PlumBackground'
import TwitterComments from '@/components/TwitterComments'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/metadata'

export const metadata = genMeta('/ai/jdm/uz')

export default function JustDoMoreUzbek() {
  return (
    <>
      <PlumBackground />
      <Navigation />
      <main className="min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          {/* Atomic Idea Header */}
          <header className="mb-12">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              2 Sentabr
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Faqat ko'proq qiling
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Atomik g'oyalar</span>
            </div>
          </header>

          {/* Atomic Idea Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Odamlar fan texnologiyaga, texnologiya esa biznesga olib keladi deb o'ylaydi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Bu aynan teskari: biznes texnologiyaga, texnologiya esa fanga olib keladi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hammasi sinov va xato orqali.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Sizga bir fikr tajribasini beray.
              Biz eng yaxshi manti (an'anaviy taom) pishirmoqchimiz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ikki yondashuv:
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              #1 guruh tasodifiy ravishda kichik ingredientlar qo'shadi, yaxshiroqmi tekshiradi, sinab ko'radi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              #2 guruh universitetga borib, mantidagi kimyoviy tenglamalarni o'rganadi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Kim tezroq yaxshilaydi? Birinchi guruh, <strong>sinov va xato orqali.</strong>
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Bu texnologiyaning haqiqatan qanday rivojlanishini ifodalaydi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hammasi muhandislar va kichik xato, katta potentsial foyda bilan tajriba qiluvchilar tomonidan amalga oshiriladi. Sinov va xato haqiqatan ham sinov va xato emas—bu kichik xato va katta potentsial foyda bilan sinov.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Akademiklar qabul qilishni yaxshi ko'rmagan narsa shuki, biznes texnologiyaga, texnologiya esa fanga olib keladi—teskari holatdan ancha, ancha, ancha ko'p.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Reaktiv motor fiziklar tomonidan ishlab chiqilmagan—u qanday ishlashini bilmagan muhandislar tomonidan yaratilgan. Biz hali ham velosiped qanday ishlashini bilmaymiz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Bug' mashinasi termodinamika professorlari tomonidan ixtiro qilinmagan; termodinamika bug' mashinalarini tushunish uchun ishlab chiqilgan.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Internet tarmoq nazariyotchilari tomonidan yaratilmagan; tarmoq nazariyasi internetni tushunish uchun paydo bo'lgan.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Yevropa soborlari arab raqamlari paydo bo'lishidan oldin Yevropada hech kim bo'linishni qila olmaganligi sababli Evklid geometriyasisiz chiroyli qurilgan. Hammasi sinov va xato, ishlaydigan qoidalarni rivojlantirish edi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Tinkering (kichik o'zgarishlar kiritish).
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ortiqcha o'ylash inson energiyasining eng katta isrofidir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              O'zingizga ishoning, qaror qiling va ko'proq tajriba oling.
              Mukammal narsa yo'q. Siz mukammallikka o'ylab kira olmaysiz, <strong>faqat harakat qiling.</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-8">
              <strong>100x printsipi:</strong>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              100 ta esse yozing.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              100 ta taom pishiring.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              100 ta veb-sayt yarating.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              100 ta investorga taklif qiling.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Har biri "yetarlicha yaxshi."
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-12">
              Har biri yaxshiroq.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Jimmy Donaldson (MrBeast) 8 yil davomida onasining podvalida suratga olib, 100+ kam tomosha qilingan video yaratdi—uning muvaffaqiyatli videosi chiqishidan oldin. U suratlar, sarlavhalar va formatlarni doimiy sinab ko'rdi. Hozir: 400M+ obunachi.
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "Birinchi 100 ta video mashq"
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Mashhurlikdan oldin, The Beatles Gamburgning iflos klublarida ikki yil davomida kechasi 8 soatlik dasturlar ijro etdi. Ular kaverlarni <strong>1200 marta</strong> ijro etdi.
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                Lennon keyinroq aytdi: "Biz yaxshilashdik va ishonchliroq bo'ldik. Aynan shu yerda biz haqiqatan chalishni o'rgandik."
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Minecraft ($2.5B franshiza) yaratishdan oldin, Persson o'nlab <strong>kichik, kamchilikli</strong> o'yinlar yaratdi. U ularni ommaga chiqardi va fikr-mulohazalardan o'rganardi.
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "Men ortiqcha o'ylamadim—faqat jo'natdim."
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Steven Kingning birinchi hikoyasi 30 marta rad etildi. U yozishda davom etdi va rad qilish qog'ozlarini devoriga qadab qo'ydi. Zamorchi bo'lib ishlayotganda, u har kuni yozardi, keyin Carrie (uning to'rtinchi romani) nashr etildi. U 65+ roman yozgan.
              </p>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "Havaskorlar ilhom kutib o'tiradi; qolganlarimiz ishga ketamiz."
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Dyson changyutgichning <strong>5126 versiyasini 15 yil</strong> yaratdi, toki uning sumkasisiz dizayni muvaffaqiyatga erishdi.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Edison o'z chiroq filament uchun <strong>6000 dan ortiq material</strong> sinab ko'rdi, mashhur aytganidek: "Men muvaffaqiyatsizlikka uchramadim. Men faqat <strong>10000 yo'l</strong> topdim, ular ishlamaydi." <strong>Uning jamoasi yillar davomida kuniga 18 soat ishladi</strong>. Ular mukammal nazariyalar ustidan tajriba tezligini ustuvor qo'ydi.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Van Gog har kuni chizardi, hatto uni "aqldan ozgan" deb masxara qilganda ham. U 900 dan ortiq rasm va 1100 ta eskiz yaratdi, <strong>lekin faqat bittasini sotdi</strong>. U o'z xatlarida yozgan: <strong>"Agar ichingizda 'Siz chiza olmaysiz' degan ovoz eshitsangiz, albatta chizing, va bu ovoz jim bo'ladi."</strong>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Seth Godin aytadi: <strong>"Noto'g'ri bo'lishning narxi hech narsa qilmaslikning narxidan kam."</strong>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Asimov, tarixdagi eng ko'p yozgan mualliflardan biri, ilmiy fantastika, tarix va biokimyo sohalarida 500 dan ortiq kitob yozgan. U qat'iy kunlik yozish tartibini kuzatardi, ko'pincha yiliga 10+ kitob nashr etardi. "Men nafas olishim uchun yozaman—chunki aks holda o'lardim," dedi u. (hajm-birinchi yondashuv)
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                65 yoshida Sanders o'z qovurilgan tovuq retseptini eshikdan eshikga taklif qildi, Yuta restorani "ha" deb aytishidan oldin 1009 marta rad etildi. U har kuni partiyalar pishirdi, ziravorlar va bosim bilan qovurish texnikasini o'zgartirdi. Bugun: dunyo bo'ylab 25000+ KFC filiali.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Abel Tesfaye (The Weeknd) yillar davomida taxallus ostida xavotirli, xom treklarni YouTube'ga yukladi. U sanoat normalarini e'tiborsiz qoldirdi, 2011 yilda uchta bepul mixtape chiqardi. Drake uni topdi va House of Balloons madaniy klassikaga aylandi.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 my-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Agata Kristi, "Sir asoschisi", hamshira bo'lib ishlayotganda, da'vaga ko'ra birinchi romanini yozdi. U 66 roman nashr etdi, mashhur aytganidek: <strong>"O'ylay olmaysiz deb o'ylayotganingizda ham yozing."</strong>
              </p>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 font-bold mt-16 mb-8">
              Faqat ko'proq qiling. "Bu 10000 soat emas. 10000 takrorlash."
            </p>
          </article>

          {/* Twitter Comments */}
          <TwitterComments 
            title="Faqat ko'proq qiling"
          />

          {/* Read in Other Languages */}
          <section className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              Boshqa tillarda o'qing: <Link href="/ai/jdm" className="text-blue-600 dark:text-blue-400 hover:underline">English</Link>, <Link href="/ai/jdm/ru" className="text-blue-600 dark:text-blue-400 hover:underline">Русский</Link>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
