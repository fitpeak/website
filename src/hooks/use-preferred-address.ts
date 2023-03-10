import useSWR from "swr"

import { AddressRecord } from "@/lib/xata/codegen/shop"

export const usePreferredAddress = () => {
  const { data, error } = useSWR("/api/addresses/preferred")
  const { mutate } = useSWR("/api/addresses/preferred", {
    revalidateOnFocus: false,
  })

  const loading = !data && !error
  const preferredAddress = data?.preferred_address as AddressRecord

  const setPreferredAddress = async (addressId: string) => {
    const res = await fetch("/api/addresses/preferred", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ addressId }),
    })

    const data = (await res.json()) as { ok?: true }

    if (data.ok) {
      mutate()
    }

    return !!data.ok
  }

  return { preferredAddress, loading, setPreferredAddress, error }
}
