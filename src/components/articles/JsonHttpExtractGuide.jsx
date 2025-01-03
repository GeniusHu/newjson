import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ClockIcon, 
  CalendarIcon,
  BookOpenIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const JsonHttpExtractGuide = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>How to Perform HTTP Extract from JSON: A Step-by-Step Guide - JSON Tools</title>
        <meta name="description" content="Learn how to perform HTTP extract from JSON with step-by-step examples in Python, JavaScript, and Java. Extract data from APIs efficiently and securely." />
        <meta name="keywords" content="HTTP extract JSON, JSON parsing, API data extraction, JSON response handling" />
      </Helmet>

      <article className="prose prose-invert prose-lg max-w-none">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How to Perform HTTP Extract from JSON: A Step-by-Step Guide</h1>
          <div className="flex items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              <time dateTime="2024-01-15">January 15, 2024</time>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5" />
              <span>12 min read</span>
            </div>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p>
            When working with APIs or web services, extracting specific data from a JSON response is a common and essential task. 
            JSON (JavaScript Object Notation) is widely used for data exchange due to its lightweight and human-readable structure. 
            This guide will show you how to perform an HTTP extract from JSON, focusing on practical steps in different programming environments.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What is HTTP Extract from JSON?</h2>
          <p>
            An HTTP extract from JSON involves sending an HTTP request to a web service and parsing the JSON response to retrieve specific data. 
            This is especially useful in scenarios like:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fetching weather data</li>
            <li>Extracting user information from social media APIs</li>
            <li>Reading sensor data in IoT applications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Step-by-Step Guide to Extracting JSON Data</h2>
          
          <h3 className="text-xl font-bold mb-4">1. Python Example</h3>
          <p>Using Python, you can extract JSON data with the requests and json libraries.</p>
          <pre className="bg-gray-800 text-white p-4 rounded mb-4">
            <code>
              {`import requests

# Step 1: Send an HTTP GET request
response = requests.get("https://api.example.com/data")

# Step 2: Parse the JSON response
data = response.json()

# Step 3: Extract specific values
user_id = data['user']['id']
user_name = data['user']['name']
user_email = data['user']['email']

# Output the results
print(f"ID: {user_id}")
print(f"Name: {user_name}")
print(f"Email: {user_email}")`}
            </code>
          </pre>

          <h3 className="text-xl font-bold mb-4">2. JavaScript Example</h3>
          <p>In JavaScript, you can use the fetch API to send HTTP requests and parse JSON.</p>
          <pre className="bg-gray-800 text-white p-4 rounded mb-4">
            <code>
              {`// Step 1: Send an HTTP request using fetch
fetch("https://api.example.com/data")
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    // Step 2: Extract specific data
    const userId = data.user.id;
    const userName = data.user.name;
    const userEmail = data.user.email;

    // Step 3: Display the extracted data
    console.log(\`ID: \${userId}\`);
    console.log(\`Name: \${userName}\`);
    console.log(\`Email: \${userEmail}\`);
  })
  .catch(error => console.error("Error fetching data:", error));`}
            </code>
          </pre>

          <h3 className="text-xl font-bold mb-4">3. Java Example</h3>
          <p>Java provides libraries like HttpClient and Gson to handle HTTP requests and JSON parsing.</p>
          <pre className="bg-gray-800 text-white p-4 rounded mb-4">
            <code>
              {`import java.net.http.*;
import java.net.URI;
import com.google.gson.*;

public class JsonExtractor {
    public static void main(String[] args) throws Exception {
        // Step 1: Send an HTTP GET request
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(new URI("https://api.example.com/data"))
            .build();
        HttpResponse<String> response = client.send(request, 
            HttpResponse.BodyHandlers.ofString());

        // Step 2: Parse JSON response
        Gson gson = new Gson();
        JsonObject data = gson.fromJson(response.body(), JsonObject.class);

        // Step 3: Extract specific values
        String userId = data.getAsJsonObject("user").get("id").getAsString();
        String userName = data.getAsJsonObject("user").get("name").getAsString();
        String userEmail = data.getAsJsonObject("user").get("email").getAsString();

        // Output the results
        System.out.println("ID: " + userId);
        System.out.println("Name: " + userName);
        System.out.println("Email: " + userEmail);
    }
}`}
            </code>
          </pre>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Best Practices for Extracting JSON Data</h2>
          <ul className="list-decimal pl-6 mb-4">
            <li>Error Handling: Always check for errors in the HTTP response (e.g., status code 200)</li>
            <li>Dynamic Parsing: Handle unexpected changes in the JSON structure by validating keys before accessing them</li>
            <li>Security: Avoid using eval() or insecure parsing methods to prevent malicious code execution</li>
            <li>Performance: For large JSON data, parse only the required fields to improve efficiency</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Advanced Techniques</h2>
          
          <h3 className="text-xl font-bold mb-4">1. JSONPath for Complex Queries</h3>
          <p>Tools like JSONPath allow you to query JSON data with syntax similar to XPath.</p>
          <pre className="bg-gray-800 text-white p-4 rounded mb-4">
            <code>
              {`// Using JSONPath to extract all book titles:
$.store.book[*].title`}
            </code>
          </pre>

          <h3 className="text-xl font-bold mb-4">2. Batch Processing</h3>
          <p>
            If you're dealing with multiple JSON responses, consider using multithreading or asynchronous calls to speed up processing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p>
            Extracting data from JSON responses is a vital skill for developers working with APIs or web services. 
            Whether you're using Python, JavaScript, or Java, the process involves sending an HTTP request, parsing the response, 
            and retrieving specific data. By following this guide and adopting best practices, you can efficiently handle JSON data 
            in your applications.
          </p>
        </section>
      </article>
    </div>
  );
};

export default JsonHttpExtractGuide; 