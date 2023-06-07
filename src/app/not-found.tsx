import layout from '#@/styles/css/layout.module.css';
import typeface from '#@/styles/css/typeface.module.css';

export default function NotFound () {
  return (
    <div className={ layout.body }>
      <div className={ layout.name }>
        <h2 className={ typeface.title }>Not Found</h2>

        <p className="text-sm">Could not find requested resource</p>
      </div>
    </div>
  );
}
