import api from './api'

export default async function (apiName, { id, payload, onError, onSuccess } = {}) {
  let response = null

  try {
    response = await api[apiName](payload || id)
  } catch (error) {
    if (typeof onError === 'function') {
      onError(error)
    }
  }

  if (typeof onSuccess === 'function') {
    onSuccess(response)
  }
}
