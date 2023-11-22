package data

// Venue represents a venue entity with name and type.
type Venue struct {
	ID			 string `json:"id"`
	Name     string `json:"name"`
	Type     string `json:"type"`
	Date     string `json:"date"`
	Location string `json:"location"`
}

// MockDataSource represents a mock data source for venues.
var MockDataSource = []Venue{
	{ID:"0", Name: "venue 1", Type: "Football Field", Date: "2023-01-01", Location: "Location 1"},
	{ID:"1", Name: "venue 2", Type: "Basketball Court", Date: "2023-01-02", Location: "Location 2"},
	{ID:"2", Name: "venue 3", Type: "Tennis Court", Date: "2023-01-03", Location: "Location 3"},
}
