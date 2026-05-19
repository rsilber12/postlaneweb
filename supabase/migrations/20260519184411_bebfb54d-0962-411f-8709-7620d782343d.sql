CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_type TEXT NOT NULL,
  product_interests TEXT[] NOT NULL DEFAULT '{}'::text[],
  quantity TEXT NOT NULL,
  message TEXT NOT NULL DEFAULT '',
  logo_file_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_quote_requests_created_at ON public.quote_requests (created_at DESC);

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quote requests"
ON public.quote_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  btrim(company) <> ''
  AND btrim(email) <> ''
  AND btrim(phone) <> ''
  AND btrim(project_type) <> ''
  AND btrim(quantity) <> ''
  AND coalesce(array_length(product_interests, 1), 0) > 0
);

CREATE POLICY "Admins can view quote requests"
ON public.quote_requests
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update quote requests"
ON public.quote_requests
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete quote requests"
ON public.quote_requests
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_quote_requests_updated_at
BEFORE UPDATE ON public.quote_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();