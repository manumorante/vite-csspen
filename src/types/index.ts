export type Step = {
  num: number
  pen_id: string
  info: string
  css: string
}

export type Pen = {
  id: string
  name: string
  info: string
  html: string
  order: number
  visible: boolean
  textcolor: string
  bgcolor: string
  brandcolor: string
  steps: Step[]
}
