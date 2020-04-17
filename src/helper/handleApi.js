import api from './api'

export default async function (apiName, { id, payload, onErro, onSuccess } = {}) {
  let response = null

  try {
    response = await api[apiName](payload || id)
  } catch (erro) {
    if (typeof onErro === 'function') {
      onErro(erro)
    }
  }

  if (typeof onSuccess === 'function') {
    onSuccess(response)
  }
}
