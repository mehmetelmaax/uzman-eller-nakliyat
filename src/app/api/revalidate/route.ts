import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

/**
 * On-Demand Cache Revalidation API.
 * Allows selective cache purging of routes (e.g., /api/revalidate?path=/&secret=YOUR_TOKEN)
 * without needing to rebuild the entire application.
 */
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const path = request.nextUrl.searchParams.get('path') || '/';

  const expectedToken = process.env.REVALIDATE_TOKEN;

  if (!expectedToken) {
    console.warn('REVALIDATE_WARNING: REVALIDATE_TOKEN is not set in environment. On-demand cache purging is disabled.');
    return NextResponse.json({ message: 'Revalidation is disabled. REVALIDATE_TOKEN is not configured.' }, { status: 503 });
  }

  if (secret !== expectedToken) {
    return NextResponse.json({ message: 'Invalid secret token' }, { status: 401 });
  }

  try {
    revalidatePath(path);
    console.log(`REVALIDATION_SUCCESS: Purged cache for path: ${path}`);
    return NextResponse.json({ revalidated: true, now: Date.now(), path });
  } catch (err: any) {
    console.error('REVALIDATION_ERROR:', err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
