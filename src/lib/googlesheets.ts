import { google } from 'googleapis'
import { env } from '../env'

async function googleAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const client = await auth.getClient()

  const googleSheets = google.sheets('v4')

  const spreadsheetId = env.SHEET_ID

  return {
    auth,
    client,
    googleSheets,
    spreadsheetId,
  }
}

export async function getSheetData() {
  const { auth, googleSheets, spreadsheetId } = await googleAuthSheets()

  const response = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: env.SHEET_NAME,
  })

  return response.data.values
}
