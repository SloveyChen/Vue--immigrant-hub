<template>
  <div class="map-container">
    <div id="map" ref="mapRef"></div>
    <div class="controls">
      <input
        v-model="searchQuery"
        placeholder="Search attractions"
        @keyup.enter="searchPlace"
      />
      <input v-model="origin" placeholder="Starting point" />
      <input v-model="destination" placeholder="Destination" />
      <button @click="calculateRoute">Route navigation</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const mapRef = ref(null);
const searchQuery = ref("");
const origin = ref("");
const destination = ref("");

let map, placesService, directionsService, directionsRenderer;

onMounted(() => {
  initMap();
});

function initMap() {
  const mapOptions = {
    center: { lat: 38.8951, lng: -77.0364 }, // 华盛顿特区（美国首都）
    zoom: 12,
  };
  map = new google.maps.Map(mapRef.value, mapOptions);
  placesService = new google.maps.places.PlacesService(map);
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
}

function searchPlace() {
  const request = {
    query: searchQuery.value,
    fields: ["name", "geometry"],
  };

  placesService.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      map.setCenter(results[0].geometry.location);
      new google.maps.Marker({
        map,
        position: results[0].geometry.location,
      });
    }
  });
}

function calculateRoute() {
  const request = {
    origin: origin.value,
    destination: destination.value,
    travelMode: "DRIVING",
  };

  directionsService.route(request, (result, status) => {
    if (status === "OK") {
      directionsRenderer.setDirections(result);
    }
  });
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: calc(100vh - 10vh - 60px);
  position: relative;
}

#map {
  width: 100%;
  height: 100%;
}

.controls {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.controls input,
.controls button {
  margin-bottom: 10px;
  width: 220px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.controls input:focus {
  outline: none;
  border-color: #4285f4;
  box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.3);
}

.controls button {
  background-color: #4285f4;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.controls button:hover {
  background-color: #3367d6;
}
</style>
