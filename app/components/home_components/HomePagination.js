import styles from '../../styles/home_styles/HomePagination.module.css';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2

export default function HomePagination({ limit, total, offset, setOffset }) {

    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - MAX_LEFT, 1);

    function onPageChange(page) {
        setOffset((page - 1) * limit);
    }

    console.log(pages);

    return (
        <ul className={styles.Pagination}>
            <button
                onClick={() => onPageChange(current - 1)}
                disabled={current === 1}
            >
                Anterior
            </button>
            {
                Array.from({ length: Math.min(MAX_ITEMS, pages) })
                .map((_, index) => index + first)
                .map((page) => (
                    <li>
                        <li
                            className={ page === current ? styles['Pagination__item--active'] : null }
                        >{page <= pages && page}</li>
                    </li>
                ))
            }
            <li>
            <button
                onClick={() => onPageChange(current + 1)}
                disabled={current === pages}
            >
                Próxima
                </button>
            </li>
        </ul>
    )
}