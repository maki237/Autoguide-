import { useState, type ReactNode } from "react"

import {
  UserRound,
  Car,
  Bell,
  MapPin,
  ShieldCheck,
  Palette,
  Save,
  CheckCircle2,
  ChevronRight,
  LogOut,
} from "lucide-react"


/* =====================================================
   TYPE DU TOGGLE
===================================================== */

type ToggleProps = {
  enabled: boolean
  onChange: (value: boolean) => void
}


/* =====================================================
   TYPE SETTING ROW
===================================================== */

type SettingRowProps = {
  title: string
  description: string
  children: ReactNode
}


/* =====================================================
   TOGGLE
===================================================== */

function Toggle({
  enabled,
  onChange,
}: ToggleProps) {

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`
        relative
        h-6
        w-11
        shrink-0
        rounded-full
        transition-colors
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-[#1468A8]/30
        ${
          enabled
            ? "bg-[#1468A8]"
            : "bg-slate-300"
        }
      `}
    >

      <span
        className={`
          absolute
          top-1
          h-4
          w-4
          rounded-full
          bg-white
          shadow-sm
          transition-transform
          duration-200
          ${
            enabled
              ? "translate-x-6"
              : "translate-x-1"
          }
        `}
      />

    </button>
  )
}


/* =====================================================
   SETTING ROW
===================================================== */

function SettingRow({
  title,
  description,
  children,
}: SettingRowProps) {

  return (
    <div className="flex items-center justify-between gap-5 p-5">

      <div className="min-w-0">

        <p className="font-medium text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-sm leading-5 text-slate-500">
          {description}
        </p>

      </div>

      <div className="shrink-0">
        {children}
      </div>

    </div>
  )
}


/* =====================================================
   SETTINGS SECTION
===================================================== */

export function SettingsSection() {

  /* =====================================================
     INFORMATIONS PROFIL
  ===================================================== */

  const [name, setName] = useState("Nina")

  const [email, setEmail] =
    useState("nina@autoguide.cm")

  const [phone, setPhone] =
    useState("+237 6XX XX XX XX")


  /* =====================================================
     VEHICULE
  ===================================================== */

  const [vehicle, setVehicle] =
    useState("Toyota Corolla - NW 123 AB")


  /* =====================================================
     NOTIFICATIONS
  ===================================================== */

  const [notifications, setNotifications] =
    useState(true)

  const [emergencyNotifications, setEmergencyNotifications] =
    useState(true)

  const [garageNotifications, setGarageNotifications] =
    useState(true)


  /* =====================================================
     GEOLOCALISATION
  ===================================================== */

  const [locationEnabled, setLocationEnabled] =
    useState(true)


  /* =====================================================
     SECURITE
  ===================================================== */

  const [secureMode, setSecureMode] =
    useState(true)


  /* =====================================================
     MESSAGE SAUVEGARDE
  ===================================================== */

  const [saved, setSaved] =
    useState(false)


  /* =====================================================
     SAUVEGARDER
  ===================================================== */

  const handleSave = () => {

    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 3000)

  }


  return (
    <section className="w-full">

      {/* =====================================================
          EN-TETE
      ===================================================== */}

      <div className="mb-8">

        <h1 className="
          text-3xl
          font-bold
          tracking-tight
          text-slate-900
          md:text-4xl
        ">
          Paramètres
        </h1>

        <p className="
          mt-2
          text-sm
          text-slate-500
          md:text-base
        ">
          Personnalisez votre expérience AutoGuide+
          et gérez les paramètres de votre compte.
        </p>

      </div>


      {/* =====================================================
          INFORMATIONS PERSONNELLES
      ===================================================== */}

      <section className="
        mb-6
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      ">

        <div className="
          border-b
          border-slate-100
          p-5
        ">

          <div className="flex items-center gap-3">

            <div className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#E6F1FB]
              text-[#1468A8]
            ">
              <UserRound size={20} />
            </div>

            <div>

              <h2 className="font-bold text-slate-900">
                Informations personnelles
              </h2>

              <p className="text-sm text-slate-500">
                Gérez les informations de votre compte.
              </p>

            </div>

          </div>

        </div>


        <div className="
          grid
          grid-cols-1
          gap-5
          p-5
          md:grid-cols-2
        ">

          {/* NOM */}

          <div>

            <label className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-700
            ">
              Nom
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                text-sm
                outline-none
                transition
                focus:border-[#1468A8]
                focus:bg-white
              "
            />

          </div>


          {/* EMAIL */}

          <div>

            <label className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-700
            ">
              Adresse e-mail
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                text-sm
                outline-none
                transition
                focus:border-[#1468A8]
                focus:bg-white
              "
            />

          </div>


          {/* TELEPHONE */}

          <div>

            <label className="
              mb-2
              block
              text-sm
              font-medium
              text-slate-700
            ">
              Téléphone
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                px-4
                py-3
                text-sm
                outline-none
                transition
                focus:border-[#1468A8]
                focus:bg-white
              "
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          VEHICULE PRINCIPAL
      ===================================================== */}

      <section className="
        mb-6
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      ">

        <div className="
          border-b
          border-slate-100
          p-5
        ">

          <div className="flex items-center gap-3">

            <div className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#E6F1FB]
              text-[#1468A8]
            ">
              <Car size={20} />
            </div>

            <div>

              <h2 className="font-bold text-slate-900">
                Véhicule principal
              </h2>

              <p className="text-sm text-slate-500">
                Sélectionnez le véhicule utilisé par défaut.
              </p>

            </div>

          </div>

        </div>


        <div className="p-5">

          <select
            value={vehicle}
            onChange={(e) =>
              setVehicle(e.target.value)
            }
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              px-4
              py-3
              text-sm
              outline-none
              transition
              focus:border-[#1468A8]
              focus:bg-white
            "
          >

            <option value="Toyota Corolla - NW 123 AB">
              Toyota Corolla - NW 123 AB
            </option>

            <option value="Toyota Yaris - LT 456 AB">
              Toyota Yaris - LT 456 AB
            </option>

            <option value="Honda Civic - CE 789 AB">
              Honda Civic - CE 789 AB
            </option>

          </select>

        </div>

      </section>


      {/* =====================================================
          NOTIFICATIONS
      ===================================================== */}

      <section className="
        mb-6
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      ">

        <div className="
          border-b
          border-slate-100
          p-5
        ">

          <div className="flex items-center gap-3">

            <div className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#FAEEDA]
              text-[#EF9F27]
            ">
              <Bell size={20} />
            </div>

            <div>

              <h2 className="font-bold text-slate-900">
                Notifications
              </h2>

              <p className="text-sm text-slate-500">
                Choisissez les notifications que vous souhaitez recevoir.
              </p>

            </div>

          </div>

        </div>


        <div className="divide-y divide-slate-100">

          <SettingRow
            title="Notifications générales"
            description="Recevoir les informations importantes d'AutoGuide+."
          >

            <Toggle
              enabled={notifications}
              onChange={setNotifications}
            />

          </SettingRow>


          <SettingRow
            title="Alertes de panne"
            description="Être informée lorsqu'une intervention est nécessaire."
          >

            <Toggle
              enabled={emergencyNotifications}
              onChange={setEmergencyNotifications}
            />

          </SettingRow>


          <SettingRow
            title="Notifications des garages"
            description="Recevoir les réponses et informations des garages."
          >

            <Toggle
              enabled={garageNotifications}
              onChange={setGarageNotifications}
            />

          </SettingRow>

        </div>

      </section>


      {/* =====================================================
          GEOLOCALISATION
      ===================================================== */}

      <section className="
        mb-6
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      ">

        <div className="
          border-b
          border-slate-100
          p-5
        ">

          <div className="flex items-center gap-3">

            <div className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#E6F1FB]
              text-[#1468A8]
            ">
              <MapPin size={20} />
            </div>

            <div>

              <h2 className="font-bold text-slate-900">
                Géolocalisation
              </h2>

              <p className="text-sm text-slate-500">
                Contrôlez l'utilisation de votre position.
              </p>

            </div>

          </div>

        </div>


        <div className="divide-y divide-slate-100">

          <SettingRow
            title="Autoriser la géolocalisation"
            description="Permettre à AutoGuide+ de déterminer votre position."
          >

            <Toggle
              enabled={locationEnabled}
              onChange={setLocationEnabled}
            />

          </SettingRow>

        </div>

      </section>


      {/* =====================================================
          SECURITE
      ===================================================== */}

      <section className="
        mb-6
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      ">

        <div className="
          border-b
          border-slate-100
          p-5
        ">

          <div className="flex items-center gap-3">

            <div className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#EAF3DE]
              text-[#639922]
            ">
              <ShieldCheck size={20} />
            </div>

            <div>

              <h2 className="font-bold text-slate-900">
                Sécurité
              </h2>

              <p className="text-sm text-slate-500">
                Protégez votre compte et vos données.
              </p>

            </div>

          </div>

        </div>


        <div className="divide-y divide-slate-100">

          <SettingRow
            title="Mode sécurisé"
            description="Renforcer la protection des informations de votre compte."
          >

            <Toggle
              enabled={secureMode}
              onChange={setSecureMode}
            />

          </SettingRow>


          <button
            type="button"
            className="
              flex
              w-full
              items-center
              justify-between
              p-5
              text-left
              transition
              hover:bg-slate-50
            "
          >

            <div>

              <p className="font-medium text-slate-800">
                Modifier le mot de passe
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Mettez à jour votre mot de passe.
              </p>

            </div>

            <ChevronRight
              size={18}
              className="text-slate-400"
            />

          </button>

        </div>

      </section>


      {/* =====================================================
          APPARENCE
      ===================================================== */}

      <section className="
        mb-6
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      ">

        <div className="p-5">

          <div className="
            flex
            items-center
            justify-between
            gap-4
          ">

            <div className="flex items-center gap-3">

              <div className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-slate-100
                text-slate-700
              ">
                <Palette size={20} />
              </div>

              <div>

                <h2 className="font-bold text-slate-900">
                  Apparence
                </h2>

                <p className="text-sm text-slate-500">
                  Interface AutoGuide+ en mode clair.
                </p>

              </div>

            </div>

            <span className="
              rounded-lg
              bg-slate-100
              px-3
              py-1.5
              text-xs
              font-semibold
              text-slate-600
            ">
              Clair
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACTIONS
      ===================================================== */}

      <div className="
        flex
        flex-col
        gap-3
        sm:flex-row
        sm:items-center
        sm:justify-between
      ">

        <button
          type="button"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-red-200
            bg-white
            px-5
            py-3
            text-sm
            font-semibold
            text-red-500
            transition
            hover:bg-red-50
          "
        >

          <LogOut size={17} />

          Se déconnecter

        </button>


        <button
          type="button"
          onClick={handleSave}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#1468A8]
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-[#0F568D]
            hover:shadow-md
          "
        >

          {saved ? (
            <>
              <CheckCircle2 size={17} />

              Modifications enregistrées
            </>
          ) : (
            <>
              <Save size={17} />

              Enregistrer les modifications
            </>
          )}

        </button>

      </div>

    </section>
  )
}