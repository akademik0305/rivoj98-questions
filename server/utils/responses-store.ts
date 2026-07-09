import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, join } from "node:path"
import type { SurveyResponse } from "~/app/types/survey"

const RESPONSES_FILE = join(process.cwd(), ".data", "responses.json")

async function ensureStoreFile() {
  await mkdir(dirname(RESPONSES_FILE), { recursive: true })

  try {
    await readFile(RESPONSES_FILE, "utf-8")
  } catch {
    await writeFile(RESPONSES_FILE, "[]", "utf-8")
  }
}

export async function readResponses(): Promise<SurveyResponse[]> {
  await ensureStoreFile()
  const raw = await readFile(RESPONSES_FILE, "utf-8")

  try {
    const parsed = JSON.parse(raw) as SurveyResponse[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export async function writeResponses(responses: SurveyResponse[]) {
  await ensureStoreFile()
  await writeFile(
    RESPONSES_FILE,
    JSON.stringify(responses, null, 2),
    "utf-8",
  )
}

export async function appendResponse(response: SurveyResponse) {
  const responses = await readResponses()

  if (responses.some((item) => item.id === response.id)) {
    return false
  }

  responses.push(response)
  await writeResponses(responses)
  return true
}

export async function clearResponses() {
  await writeResponses([])
}
