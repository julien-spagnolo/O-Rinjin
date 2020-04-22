<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Filesystem\Filesystem;


/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User implements UserInterface
{
    use TimestampableEntity;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"users-list", "user-read", "user-add", "user-edit", "services-read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups({"users-list", "user-read", "user-add", "user-edit"})
     * @Assert\Email
     * @Assert\NotBlank
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles;

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * 
     */
    private $password;

    /**
     * @var string
     * @Assert\NotBlank(
     *      groups={"register", "password-update"},
     *      message="New password can not be blank."
     * )
     * @Assert\Regex(pattern="#^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,15}$#", message="It expects atleast 1 small-case letter, 1 Capital letter, 1 digit, 1 special character and the length should be between 6-15 characters.")
     */
    private $plainPassword;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"users-list", "user-read", "user-add", "user-edit"})
     * @Assert\Type("string")
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"users-list", "user-read", "user-add", "user-edit"})
     * @Assert\NotBlank
     * @Assert\Type("string")
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=70)
     * @Groups({"users-list", "user-read", "user-add", "user-edit"})
     * @Assert\Type("string")
     * @Assert\NotBlank
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=10)
     * @Groups({"users-list", "user-read", "user-add", "user-edit"})
     * @Assert\NotBlank
     */
    private $postalCode;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"users-list", "user-read", "user-add", "user-edit"})
     * @Assert\Type("string")
     * @Assert\NotBlank
     */
    private $city;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=8)
     * @Groups({"users-list", "user-read", "user-add", "user-edit", "services-browse"})
     * @Assert\NotBlank
     */
    private $latitude;

    /**
     * @ORM\Column(type="decimal", precision=11, scale=8)
     * @Groups({"users-list", "user-read", "user-add", "user-edit", "services-browse"})
     */
    private $longitude;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"users-list", "user-read", "user-add", "user-edit"})
     */
    private $birthDate;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     * @Groups({"users-list", "user-read", "user-add", "user-edit"})
     * @Assert\File(
     *      maxSize = "2048k",
     *      mimeTypes = {"application/png", "application/jpg", "application/jpeg"},
     *      mimeTypesMessage = "Please upload a valid format")
     */
    private $avatar;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Service", mappedBy="user", orphanRemoval=true)
     * @MaxDepth(1)
     */
    private $service;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Comment", mappedBy="user", orphanRemoval=true)
     * @MaxDepth(1)
     */
    private $comment;

    public function __construct()
    {
        $this->service = new ArrayCollection();
        $this->comment = new ArrayCollection();
    }



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }
    public function __toString()
    {
        return $this->email;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        $this->plainPassword = null;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getPostalCode(): ?string
    {
        return $this->postalCode;
    }

    public function setPostalCode(string $postalCode): self
    {
        $this->postalCode = $postalCode;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function setLatitude(string $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(string $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getBirthDate(): ?\DateTimeInterface
    {
        return $this->birthDate;
    }

    public function setBirthDate(\DateTimeInterface $birthDate): self
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    public function getAvatar(): ?File
    {
        //return new File($this->avatar);
        // above not working
        // bypass using a temporary File
        $filesystem = new Filesystem();
        return new File($filesystem->tempnam('/tmp', 'efface_moi_'));
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    public function setPlainPassword(?string $plainPassword): self
    {
        $this->plainPassword = $plainPassword;

        return $this;
    }

    /**
     * @return Collection|Service[]
     */
    public function getService(): Collection
    {
        return $this->service;
    }

    public function addService(Service $service): self
    {
        if (!$this->service->contains($service)) {
            $this->service[] = $service;
            $service->setUser($this);
        }

        return $this;
    }

    public function removeService(Service $service): self
    {
        if ($this->service->contains($service)) {
            $this->service->removeElement($service);
            // set the owning side to null (unless already changed)
            if ($service->getUser() === $this) {
                $service->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Comment[]
     */
    public function getComment(): Collection
    {
        return $this->comment;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comment->contains($comment)) {
            $this->comment[] = $comment;
            $comment->setUser($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comment->contains($comment)) {
            $this->comment->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getUser() === $this) {
                $comment->setUser(null);
            }
        }

        return $this;
    }
}
