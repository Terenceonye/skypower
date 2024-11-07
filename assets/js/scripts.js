document.addEventListener('DOMContentLoaded', () => {


                        // Select all elements with the class "m"
                        const paragraphs = document.querySelectorAll('.m');

                        // Set the first paragraph to be active initially
                        paragraphs[0].setAttribute('id', 'onhover');

                        // Function to add the ID on hover
                        paragraphs.forEach(paragraph => {
                            paragraph.addEventListener('mouseover', () => {
                                // Remove the onhover ID from all paragraphs
                                paragraphs.forEach(p => p.removeAttribute('id'));

                                // Add the onhover ID to the hovered paragraph
                                paragraph.setAttribute('id', 'onhover');
                            });
                        });



})