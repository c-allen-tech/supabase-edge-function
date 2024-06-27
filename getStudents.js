// Import supabase client
const { createClient } = require("@supabase/supabase-js");

// Initialize Supabase client
const supabaseUrl = "https://johsonffbpnjjjowpsvo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvaHNvbmZmYnBuampqb3dwc3ZvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTQ3Nzg1MCwiZXhwIjoyMDM1MDUzODUwfQ.KlwJkIMj3GncMll9bRTmDngTn2gXQJRe5-q8_mvBFZE";
const supabase = createClient(supabaseUrl, supabaseKey);

// Handler function
exports.handler = async (req, res) => {
  const responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, Cookie',
  };

  if (req.method === 'OPTIONS') {
      return {
          statusCode: 200,
          headers: responseHeaders,
          body: JSON.stringify({ message: 'CORS preflight request successful' }),
      };
  }

  try {
      const { data, error } = await supabase
          .from('students')
          .select('*');

      if (error) {
          return {
              statusCode: 500,
              headers: responseHeaders,
              body: JSON.stringify({ error: error.message }),
          };
      } else {
          return {
              statusCode: 200,
              headers: responseHeaders,
              body: JSON.stringify(data),
          };
      }
  } catch (error) {
      return {
          statusCode: 500,
          headers: responseHeaders,
          body: JSON.stringify({ error: error.message }),
      };
  }
};