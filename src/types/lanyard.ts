export interface LanyardOptions {
  userId: string | string[];
  socket?: boolean;
  onPresenceUpdate?: (presence: LanyardData | Record<string, LanyardData>) => void;
}

export interface LanyardResponse {
  success: boolean;
  data?: LanyardData;
  error?: LanyardError;
}

export interface LanyardError {
  message: string;
  code: string;
}

export interface LanyardData {
  kv: Record<string, string>;
  spotify: Spotify | null;
  listening_to_spotify: boolean;
  discord_user: DiscordUser;
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: Activity[];
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
}

export interface Spotify {
  track_id: string;
  timestamps: Timestamps;
  song: string;
  artist: string;
  album_art_url: string;
  album: string;
}

export interface Timestamps {
  start: number;
  end?: number;
}

export interface Activity {
  type: number;
  state: string;
  name: string;
  id: string;
  emoji?: Emoji;
  created_at: number;
  application_id?: string;
  timestamps?: Timestamps;
  session_id?: string;
  details?: string;
  buttons?: string[];
  assets?: Assets;
}

export interface Assets {
  small_text?: string;
  small_image?: string;
  large_text: string;
  large_image: string;
}

export interface Emoji {
  name: string;
  id?: string;
  animated?: boolean;
}

export interface DiscordUser {
  username: string;
  public_flags?: number;
  id: string;
  discriminator: string;
  avatar: string | null;
}
