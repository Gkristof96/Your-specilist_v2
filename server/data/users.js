import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Nagy Lajos',
        email: 'antal@email.com',
        password: bcrypt.hashSync('123456', 10),
        image: "images/profile/profile.png",
        city: "Győr",
        tel: "06 30 834 2345",
        rating: 3,
        bio: "Üdvözöllek a profilomon! Kicsit írok magamról, hogy jobban megismerj, hátha ez segít a bizalom kiépítésében. Majdnem tíz éve már hogy megszereztem az Asztalos bizonyítványom, azóta már jó sok bútor ment át a kezeim között. Ha szabad ezt mondanom mind kiváló munka volt, ahogyan azt az értékelésemből is láthatod az ügyfeleim majdnem mindig megvannak elégedve a munkámmal. Az asztalos szakma mellett pár éve elvégeztem egy burkolói gyorstalpalót is, hogy tágítsam kicsit a szakmai tudásom, valamint, hogy még több ügyfelet tudjak kiszolgálni a munkámmal. Remélem a kis bemutatkozásom elnyerte a tetszésed és hamarosan te is az elégedett ügyfeleim körét fogod gazdagítani, ami az évek alatt egyre nagyobbra duzzadt szerencsére."
    },
    {
        name: 'Kis Irén',
        email: 'iren@email.com',
        password: bcrypt.hashSync('123456', 10),
        image: "images/profile/profile.png",
        city: "Szeged",
        tel: "06 30 123 2345",
        rating: 1,
        bio: "Üdvözöllek a profilomon! Kicsit írok magamról, hogy jobban megismerj, hátha ez segít a bizalom kiépítésében. Majdnem tíz éve már hogy megszereztem az Asztalos bizonyítványom, azóta már jó sok bútor ment át a kezeim között. Ha szabad ezt mondanom mind kiváló munka volt, ahogyan azt az értékelésemből is láthatod az ügyfeleim majdnem mindig megvannak elégedve a munkámmal. Az asztalos szakma mellett pár éve elvégeztem egy burkolói gyorstalpalót is, hogy tágítsam kicsit a szakmai tudásom, valamint, hogy még több ügyfelet tudjak kiszolgálni a munkámmal. Remélem a kis bemutatkozásom elnyerte a tetszésed és hamarosan te is az elégedett ügyfeleim körét fogod gazdagítani, ami az évek alatt egyre nagyobbra duzzadt szerencsére."
    },
    {
        name: 'Molnár Ferenc',
        email: 'ferenc@email.com',
        password: bcrypt.hashSync('123456', 10),
        image: "images/profile/profile.png",
        city: "Budapest",
        tel: "06 30 231 2345",
        rating: 4.5,
        bio: "Üdvözöllek a profilomon! Kicsit írok magamról, hogy jobban megismerj, hátha ez segít a bizalom kiépítésében. Majdnem tíz éve már hogy megszereztem az Asztalos bizonyítványom, azóta már jó sok bútor ment át a kezeim között. Ha szabad ezt mondanom mind kiváló munka volt, ahogyan azt az értékelésemből is láthatod az ügyfeleim majdnem mindig megvannak elégedve a munkámmal. Az asztalos szakma mellett pár éve elvégeztem egy burkolói gyorstalpalót is, hogy tágítsam kicsit a szakmai tudásom, valamint, hogy még több ügyfelet tudjak kiszolgálni a munkámmal. Remélem a kis bemutatkozásom elnyerte a tetszésed és hamarosan te is az elégedett ügyfeleim körét fogod gazdagítani, ami az évek alatt egyre nagyobbra duzzadt szerencsére."
    },
    {
        name: 'Kupak János',
        email: 'janos@email.com',
        password: bcrypt.hashSync('123456', 10),
        image: "images/profile/profile.png",
        city: "Tatabánya",
        tel: "06 70 834 2345",
        rating: 2,
        bio: "Üdvözöllek a profilomon! Kicsit írok magamról, hogy jobban megismerj, hátha ez segít a bizalom kiépítésében. Majdnem tíz éve már hogy megszereztem az Asztalos bizonyítványom, azóta már jó sok bútor ment át a kezeim között. Ha szabad ezt mondanom mind kiváló munka volt, ahogyan azt az értékelésemből is láthatod az ügyfeleim majdnem mindig megvannak elégedve a munkámmal. Az asztalos szakma mellett pár éve elvégeztem egy burkolói gyorstalpalót is, hogy tágítsam kicsit a szakmai tudásom, valamint, hogy még több ügyfelet tudjak kiszolgálni a munkámmal. Remélem a kis bemutatkozásom elnyerte a tetszésed és hamarosan te is az elégedett ügyfeleim körét fogod gazdagítani, ami az évek alatt egyre nagyobbra duzzadt szerencsére."
    },
    {
        name: 'Nagy Lajos',
        email: 'lajos@email.com',
        password: bcrypt.hashSync('123456', 10),
        image: "images/profile/profile.png",
        city: "Budapest",
        tel: "06 20 834 2345",
        rating: 4,
        bio: "Üdvözöllek a profilomon! Kicsit írok magamról, hogy jobban megismerj, hátha ez segít a bizalom kiépítésében. Majdnem tíz éve már hogy megszereztem az Asztalos bizonyítványom, azóta már jó sok bútor ment át a kezeim között. Ha szabad ezt mondanom mind kiváló munka volt, ahogyan azt az értékelésemből is láthatod az ügyfeleim majdnem mindig megvannak elégedve a munkámmal. Az asztalos szakma mellett pár éve elvégeztem egy burkolói gyorstalpalót is, hogy tágítsam kicsit a szakmai tudásom, valamint, hogy még több ügyfelet tudjak kiszolgálni a munkámmal. Remélem a kis bemutatkozásom elnyerte a tetszésed és hamarosan te is az elégedett ügyfeleim körét fogod gazdagítani, ami az évek alatt egyre nagyobbra duzzadt szerencsére."
    }
]

export default users