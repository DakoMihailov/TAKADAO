// main.go
package main

import (
	"strings"
	"net/http"
	"BACKEND/handler"
)

func isLocalhostWithAllowedPort(origin string) bool {
    return strings.HasPrefix(origin, "http://localhost:")
}

func EnableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")
		if isLocalhostWithAllowedPort(origin) {
    	w.Header().Set("Access-Control-Allow-Origin", origin)
		}
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "*")

		next.ServeHTTP(w, r)
	})
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/search", handler.SearchHandler)

	handler := EnableCORS(mux)

	http.ListenAndServe(":4000", handler)
}
