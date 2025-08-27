import fetch from "node-fetch"

const BASE_URL = "http://localhost:3001"
const API_URL = `${BASE_URL}/api`

console.log("[v0] Starting backend test suite...")

// Test 1: Health Check
async function testHealthCheck() {
  try {
    console.log("[v0] Testing health check endpoint...")
    const response = await fetch(`${BASE_URL}/health`)
    const data = await response.json()

    if (response.ok && data.status === "OK") {
      console.log("✅ Health check passed")
      return true
    } else {
      console.log("❌ Health check failed:", data)
      return false
    }
  } catch (error) {
    console.log("❌ Health check error:", error.message)
    return false
  }
}

// Test 2: Get All Products
async function testGetProducts() {
  try {
    console.log("[v0] Testing get all products...")
    const response = await fetch(`${API_URL}/products`)
    const data = await response.json()

    if (response.ok) {
      console.log(`✅ Get products passed - Found ${data.products?.length || 0} products`)
      console.log("[v0] Sample product data:", data.products?.[0] || "No products found")
      return true
    } else {
      console.log("❌ Get products failed:", data)
      return false
    }
  } catch (error) {
    console.log("❌ Get products error:", error.message)
    return false
  }
}

// Test 3: Add Product (without image first)
async function testAddProduct() {
  try {
    console.log("[v0] Testing add product...")

    const productData = {
      title: "Test Product",
      description: "This is a test product created by the test script",
      price: 1999,
      category: "men",
      subCategory: "casual",
      offer: 15,
    }

    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })

    const data = await response.json()

    if (response.ok) {
      console.log("✅ Add product passed")
      console.log("[v0] Created product:", data.product)
      return data.product
    } else {
      console.log("❌ Add product failed:", data)
      return null
    }
  } catch (error) {
    console.log("❌ Add product error:", error.message)
    return null
  }
}

// Test 4: Get Product by Category
async function testGetProductsByCategory() {
  try {
    console.log("[v0] Testing get products by category...")
    const response = await fetch(`${API_URL}/products?category=men`)
    const data = await response.json()

    if (response.ok) {
      console.log(`✅ Get products by category passed - Found ${data.products?.length || 0} men's products`)
      return true
    } else {
      console.log("❌ Get products by category failed:", data)
      return false
    }
  } catch (error) {
    console.log("❌ Get products by category error:", error.message)
    return false
  }
}

// Test 5: Search Products
async function testSearchProducts() {
  try {
    console.log("[v0] Testing search products...")
    const response = await fetch(`${API_URL}/products?search=test`)
    const data = await response.json()

    if (response.ok) {
      console.log(`✅ Search products passed - Found ${data.products?.length || 0} matching products`)
      return true
    } else {
      console.log("❌ Search products failed:", data)
      return false
    }
  } catch (error) {
    console.log("❌ Search products error:", error.message)
    return false
  }
}

// Test 6: Environment Variables Check
function testEnvironmentVariables() {
  console.log("[v0] Checking environment variables...")

  const requiredEnvVars = [
    "PORT",
    "MONGODB_URI",
    "GOOGLE_DRIVE_CLIENT_ID",
    "GOOGLE_DRIVE_CLIENT_SECRET",
    "GOOGLE_DRIVE_REDIRECT_URI",
    "GOOGLE_DRIVE_REFRESH_TOKEN",
    "GOOGLE_DRIVE_FOLDER_ID",
  ]

  let allPresent = true

  requiredEnvVars.forEach((envVar) => {
    if (process.env[envVar]) {
      console.log(`✅ ${envVar}: Set`)
    } else {
      console.log(`❌ ${envVar}: Missing`)
      allPresent = false
    }
  })

  return allPresent
}

// Main test runner
async function runAllTests() {
  console.log("[v0] ================================")
  console.log("[v0] Backend Test Suite Starting")
  console.log("[v0] ================================\n")

  const results = {
    envVars: false,
    health: false,
    getProducts: false,
    addProduct: false,
    getByCategory: false,
    search: false,
  }

  // Test environment variables first
  results.envVars = testEnvironmentVariables()
  console.log("")

  // Only proceed with API tests if server might be running
  console.log("[v0] Testing API endpoints...")
  console.log("[v0] Make sure your backend server is running on http://localhost:3001\n")

  results.health = await testHealthCheck()
  results.getProducts = await testGetProducts()
  results.addProduct = await testAddProduct()
  results.getByCategory = await testGetProductsByCategory()
  results.search = await testSearchProducts()

  // Summary
  console.log("\n[v0] ================================")
  console.log("[v0] Test Results Summary")
  console.log("[v0] ================================")

  Object.entries(results).forEach(([test, passed]) => {
    console.log(`${passed ? "✅" : "❌"} ${test}: ${passed ? "PASSED" : "FAILED"}`)
  })

  const passedTests = Object.values(results).filter(Boolean).length
  const totalTests = Object.keys(results).length

  console.log(`\n[v0] Overall: ${passedTests}/${totalTests} tests passed`)

  if (passedTests === totalTests) {
    console.log("[v0] 🎉 All tests passed! Your backend is working correctly.")
  } else {
    console.log("[v0] ⚠️  Some tests failed. Check the error messages above.")
  }
}

// Run the tests
runAllTests().catch((error) => {
  console.error("[v0] Test suite error:", error)
})
