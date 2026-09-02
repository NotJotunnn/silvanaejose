import trinta from "./qrcodes/30.png"
import cinquenta from "./qrcodes/50.png"
import setenta from "./qrcodes/70.png"
import cem from "./qrcodes/100.png"
import centoECinquenta from "./qrcodes/150.png"
import personalizado from "./qrcodes/personalizado.png"

import Porquinho from "./items/personalizado.jpg"
import PanelasEPotes from "./items/Panelas & Potes.jpg"
import Pratos from "./items/Pratos.jpg"
import Talheres from "./items/Talheres.jpg"
import MicroOndas from "./items/microondas.jpg"
import Tacas from "./items/Taças.jpg"
import Copos from "./items/Copos.jpg"
import Xicaras from "./items/Xícaras.jpg"
import PanosDePrato from "./items/Panos de prato.jpg"
import Escorredor from "./items/Escorredor de Louça.jpg"

import Confirmado from "./icons/verified 1.png"
import Cerimonia from "./icons/church 1.png"
import Casal from "./icons/wedding 1.png"
import Bolo from "./icons/birthday-cake 1.png"
import Convidado from "./icons/love-letter 1.png"
import Decoracao from "./icons/flower 1.png"
import Tarde from "./icons/late 1.png"
import Camera from "./icons/camera 1.png"
import Despedir from "./icons/hand-wave 1.png"
import Discreto from "./icons/spy 1.png"

type value = {
  qrcode: string,
  code: string,
  cost: string,
}[]

export type ListItem = {
  name: string,
  payment: value[number],
  image: string
}

export type GuestManual = {
  text: string,
  image: string
}

const valores = [
  {
    qrcode: trinta,
    cost: "30",
    code: "00020126510014BR.GOV.BCB.PIX0129silvana.francisca37@yahoo.com520400005303986540530.005802BR5925Silvana Francisca Leandro6009SAO PAULO62140510w6sKAQo0rG6304F2F1"
  },
  {
    qrcode: cinquenta,
    cost: "50",
    code: "00020126510014BR.GOV.BCB.PIX0129silvana.francisca37@yahoo.com520400005303986540550.005802BR5925Silvana Francisca Leandro6009SAO PAULO62140510wSp1f0Qegs6304D210"
  },
  {
    qrcode: setenta,
    cost: "70",
    code: "00020126510014BR.GOV.BCB.PIX0129silvana.francisca37@yahoo.com520400005303986540570.005802BR5925Silvana Francisca Leandro6009SAO PAULO62140510ZYtmq2dbhG6304A382"
  },
  {
    qrcode: cem,
    cost: "100",
    code: "00020126510014BR.GOV.BCB.PIX0129silvana.francisca37@yahoo.com5204000053039865406100.005802BR5925Silvana Francisca Leandro6009SAO PAULO62140510d6ggk9KDJx6304F1E3"
  },
  {
    qrcode: centoECinquenta,
    cost: "150",
    code: "00020126510014BR.GOV.BCB.PIX0129silvana.francisca37@yahoo.com5204000053039865406150.005802BR5925Silvana Francisca Leandro6009SAO PAULO62140510CifFi84CAt6304E255"
  },
  {
    qrcode: personalizado,
    cost: "Personalizado",
    code: "00020126510014BR.GOV.BCB.PIX0129silvana.francisca37@yahoo.com5204000053039865802BR5925Silvana Francisca Leandro6009SAO PAULO621405102MOAe4Jxb3630456CF"
  }
]

export const list: ListItem[] = [
  {
    name: "Personalizado",
    payment: valores[5],
    image: Porquinho
  },
  {
    name: "Pratos",
    payment: valores[0],
    image: Pratos
  },
  {
    name: "Panos de prato",
    payment: valores[1],
    image: PanosDePrato
  },
  {
    name: "Escorredor de louça",
    payment: valores[2],
    image: Escorredor
  },
  {
    name: "Talheres",
    payment: valores[3],
    image: Talheres
  },
  {
    name: "Panelas & Potes",
    payment: valores[4],
    image: PanelasEPotes
  },
  {
    name: "Microondas",
    payment: valores[1],
    image: MicroOndas
  },
  {
    name: "Copos",
    payment: valores[2],
    image: Copos
  },
  {
    name: "Xícaras",
    payment: valores[3],
    image: Xicaras
  },
  {
    name: "Taças",
    payment: valores[4],
    image: Tacas
  },
]

export const guidelines: GuestManual[] = [
  {
    text: "Confirme sua presença",
    image: Confirmado
  },
  {
    text: "Participe da cerimônia",
    image: Cerimonia
  },
  {
    text: "Branco e cinza são as cores dos noivos!",
    image: Casal
  },
  {
    text: "Aguarde a liberação da mesa dos doces!",
    image: Bolo
  },
  {
    text: "Convidado não convida",
    image: Convidado
  },
  {
    text: "Não leve a decoração para casa",
    image: Decoracao
  },
  {
    text: "Não se atrase",
    image: Tarde
  },
  {
    text: "Não atrapalhe os fotografos",
    image: Camera
  },
  {
    text: "Não saia sem se despedir dos noivos",
    image: Despedir
  },
  {
    text: "Use traje discreto e elegante para a cerimônia",
    image: Discreto
  },
]