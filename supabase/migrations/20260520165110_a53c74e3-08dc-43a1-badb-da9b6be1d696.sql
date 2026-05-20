
INSERT INTO storage.buckets (id, name, public)
VALUES ('quote-attachments', 'quote-attachments', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public can view quote attachments"
ON storage.objects FOR SELECT
USING (bucket_id = 'quote-attachments');

CREATE POLICY "Anyone can upload quote attachments"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'quote-attachments');
