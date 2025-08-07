const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event, context) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    try {
        const { name, message } = JSON.parse(event.body);

        if (!name || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Nama dan pesan tidak boleh kosong.' })
            };
        }

        const { data, error } = await supabase
            .from('messages')
            .insert([{ name: name, message_text: message }])
            .select();

        if (error) {
            throw error;
        }

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};