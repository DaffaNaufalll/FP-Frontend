const BASE_URL = "https://backend-production-3b7e2.up.railway.app/";

export function getTickets() {
  return fetch(`${BASE_URL}api/tickets`).then(res => res.json());
}

// Add more API functions as needed